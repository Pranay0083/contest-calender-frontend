export function sortEventsByDate(events) {
    const now = new Date();
    const parseDate = (dateString) => {
        if (dateString === "Live Now") {
            return new Date(0); // Treat "Live Now" as the earliest possible date
        }
        const date = new Date(dateString);
        return date < now ? new Date(0) : date; // Treat past dates as "Live Now"
    };
    return events.sort((a, b) => {
        const dateA = parseDate(a.date || a.start || "Live Now");
        const dateB = parseDate(b.date || b.start || "Live Now");
        return dateA - dateB;
    });
}