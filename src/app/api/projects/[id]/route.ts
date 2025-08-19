import { NextResponse } from "next/server";
import { projects } from "@/data/projects";

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return NextResponse.json({ error: "Projeto não encontrado" }, { status: 404 });
  }

  return NextResponse.json(project);
}
