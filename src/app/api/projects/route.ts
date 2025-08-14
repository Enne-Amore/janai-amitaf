import { allProjects } from "@/data/allProjects";

export async function GET() {
  return Response.json({allProjects});
}
