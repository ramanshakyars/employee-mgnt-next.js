import StudentDetailsPage from '../studentdetails/page';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function DynamicStudentDetailsPage({ params }: Props) {
  const { id } = await params;
  return <StudentDetailsPage searchParams={Promise.resolve({ id })} />;
}
