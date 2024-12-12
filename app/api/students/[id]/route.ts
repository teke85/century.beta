import Students from "@/app/lib/db";

export async function PUT (
    request: Request,
    context: { params: {id: string } },
) {
    const id = +context.params.id;
    const student = await request.json();

    const index = Students.findIndex((b) => b.id === id);
    Students[index] = student;
    return Response.json(Students);
}

export async function DELETE (
    request: Request,
    context: { params: {id: string } },
) {
    const id = +context.params.id;

    const index = Students.findIndex((b) => b.id === id);
    Students.splice(index, 1);
    return Response.json(Students);
}