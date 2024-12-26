import CompletedTasks from "@/components/CompletedTasks";

export default function CompletedTasksPage() {
  return (
    <div className="px-6 py-10 md:px-20 bg-base_color min-h-screen my-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-base_text">Completed Tasks</h1>
      <CompletedTasks />
    </div>
  );
}
