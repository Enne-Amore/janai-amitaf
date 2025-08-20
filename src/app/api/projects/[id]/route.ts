import { NextResponse } from "next/server";
import { projects } from "@/data/projects";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const project = projects.find((p) => p.id === id);
  if (!project) {
    return NextResponse.json(
      { error: "Projeto não encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json({ project });
}
