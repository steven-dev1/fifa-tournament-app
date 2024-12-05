import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Configurar Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { tower, apto, name, last_name, age, adult_name, adult_contact, cellphone } = body;

    // Validar datos requeridos
    if (!tower || !apto || !name || !last_name || !age || !cellphone) {
      return NextResponse.json({ error: 'Faltan campos requeridos.' }, { status: 400 });
    }

    // Insertar datos en la tabla "registrations" de Supabase
    const { data, error } = await supabase.from('players').insert([
      {
        tower,
        apto,
        name: name,
        last_name: last_name,
        age,
        adult_name: adult_name || null, 
        adult_contact: adult_contact || null,
        cellphone: cellphone,
      },
    ]);

    if (error) {
      console.error('Error al guardar en Supabase:', error.message);
      return NextResponse.json({ error: 'Error al guardar en la base de datos.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Registro exitoso.', data, status: 201 }, { status: 201 });
  } catch (error) {
    console.error('Error en el servidor:', error);
    return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 });
  }
}
