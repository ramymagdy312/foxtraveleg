export function formatDate(date: Date | null, format: string): string {
  const originalFormat = date || new Date();
  const day = originalFormat.getDate();
  const month = originalFormat.getMonth() + 1;
  const year = originalFormat.getFullYear();
  const hours = originalFormat.getHours();
  const minutes = originalFormat.getMinutes();

  format = format.replace("dd", day.toString().padStart(2, "0"));
  format = format.replace("dd", day.toString().padStart(2, "0"));
  format = format.replace("mm", month.toString().padStart(2, "0"));
  format = format.replace("hh", hours.toString().padStart(2, "0"));
  format = format.replace("mm", minutes.toString().padStart(2, "0"));

  if (format.includes("yy") && !format.includes("yyyy")) {
    format = format.replace("yy", year.toString().slice(-2));
  } else {
    format = format.replace("yyyy", year.toString());
  }

  return format;
}
