const Submission = require("../models/submission");
const transporter = require("../config/email");
const { Parser } = require("json2csv");

exports.createSubmission = async (req, res) => {
    try {
        const { name, mobileNumber, pickupLocation, dropLocation, movingDate } = req.body;

        if (!name || !mobileNumber || !pickupLocation || !dropLocation || !movingDate) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const submission = new Submission({
            name,
            mobileNumber,
            pickupLocation,
            dropLocation,
            movingDate: new Date(movingDate)
        });

        await submission.save();

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: "New Moving Request – Sumitra Cargo Movers",
            html: `
                <h2>New Moving Request Details</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
                <p><strong>Pickup Location:</strong> ${pickupLocation}</p>
                <p><strong>Drop Location:</strong> ${dropLocation}</p>
                <p><strong>Moving Date:</strong> ${new Date(movingDate).toLocaleDateString("en-GB").replace(/\//g, "-")}</p>
                <br>
                <p>Thank you for choosing Sumitra Cargo Movers!</p>
            `,
        });

        res.status(201).json({ message: "Submission successful" });
    } catch (error) {
        console.error("Submission error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getSubmissions = async (req, res) => {
    try {
        const { search, startDate, endDate } = req.query;
        let query = {};

        if (search) {
            query.$or = [
                { name: new RegExp(search, "i") },
                { pickupLocation: new RegExp(search, "i") },
                { dropLocation: new RegExp(search, "i") },
            ];
        }

        if (startDate && endDate) {
            query.movingDate = {
                $gte: new Date(startDate),
                $lte: new Date(endDate),
            };
        }

        const submissions = await Submission.find(query).sort({ createdAt: -1 });
        res.json(submissions);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.deleteSubmission = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("Deleting submission with ID:", id);

        const deletedSubmission = await Submission.findByIdAndDelete(id);
        if (!deletedSubmission) {
            return res.status(404).json({ error: "Submission not found" });
        }

        res.json({ message: "Submission deleted successfully" });
    } catch (error) {
        console.error("Delete error:", error);
        res.status(500).json({ error: "Error deleting submission" });
    }
};



exports.exportCSV = async (req, res) => {
    try {
        const submissions = await Submission.find({});

        // Format date to dd-mm-yyyy
        const formattedSubmissions = submissions.map((submission) => ({
            ...submission.toObject(),
            movingDate: new Date(submission.movingDate).toLocaleDateString("en-GB").replace(/\//g, "-"),
        }));

        const parser = new Parser();
        const csv = parser.parse(formattedSubmissions);

        res.header("Content-Type", "text/csv");
        res.attachment("submissions.csv");
        res.send(csv);
    } catch (error) {
        res.status(500).json({ error: "Export failed" });
    }
};
