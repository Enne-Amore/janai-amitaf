import { NextResponse } from "next/server";
import { projects } from "@/data/projects";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return NextResponse.json({ error: "Projeto não encontrado" }, { status: 404 });
  }

  return NextResponse.json(project);
}
