import { NextResponse, NextRequest } from "next/server";
import { projects } from "@/data/projects";

export async function GET(
  _req: NextRequest,
  { params }: { params: Record<string, string> }
) {
  const id = params.id;

  const project = projects.find((p) => p.id === id);
  if (!project) {
    return NextResponse.json({ error: "Projeto não encontrado" }, { status: 404 });
  }

  return NextResponse.json(project);
}
