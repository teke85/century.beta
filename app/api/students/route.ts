import Students from "@/app/lib/db";

export async function GET() {
    return Response.json(Students);
}

export async function POST (request: Request) {
    const student = await request.json();
    Students.push(student);

    return Response.json(Students);
}