import { useEffect, useState } from "react";
import { getSubmissions, deleteSubmission, exportSubmissions } from "@/services/api";
import { Toaster, toast } from "sonner";
import ManageBlogs from "./ManageBlogs";

interface Submission {
  _id: string;
  name: string;
  mobileNumber: string;
  pickupLocation: string;
  dropLocation: string;
  movingDate: string;
}

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const data = await getSubmissions();
      setSubmissions(data);
    } catch {
      toast.error("Failed to fetch submissions");
    }
  };

  const handleExport = async () => {
    try {
      const data = await exportSubmissions();
      const url = window.URL.createObjectURL(data);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "submissions.csv");
      document.body.appendChild(link);
      link.click();
      link.remove();
      toast.success("CSV exported successfully!");
    } catch {
      toast.error("Error exporting CSV");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteSubmission(id);
      setSubmissions((prev) => prev.filter((submission) => submission._id !== id));
      toast.success("Submission deleted successfully!");
    } catch {
      toast.error("Error deleting submission");
    }
  };

  return (
    <div className="p-5">
      <Toaster />
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4" onClick={handleExport}>
        Export CSV
      </button>

      <div className="flex flex-col gap-4">
        {submissions.map((submission) => (
          <div key={submission._id} className="p-4 border rounded-md shadow-md">
            <p><strong>Name:</strong> {submission.name}</p>
            <p><strong>Mobile:</strong> {submission.mobileNumber}</p>
            <p><strong>Pickup:</strong> {submission.pickupLocation}</p>
            <p><strong>Drop:</strong> {submission.dropLocation}</p>
            <p><strong>Moving Date:</strong> {new Date(submission.movingDate).toLocaleDateString("en-GB")}</p>
            <button
              className="bg-red-500 text-white px-3 py-1 mt-2 rounded"
              onClick={() => handleDelete(submission._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <ManageBlogs />
    </div>
  );
};

export default AdminDashboard;