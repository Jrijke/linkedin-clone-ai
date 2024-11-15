import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";

const news = [
  {
    id: 1,
    title: "Tech layoffs continue in 2024",
    readers: "56,384 readers",
    time: "1d ago"
  },
  {
    id: 2,
    title: "AI transforms job market",
    readers: "42,892 readers",
    time: "2d ago"
  },
  {
    id: 3,
    title: "Remote work here to stay",
    readers: "38,756 readers",
    time: "3d ago"
  }
];

export default function NewsCard() {
  return (
    <Card className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">LinkedIn News</h2>
        <InfoIcon className="h-4 w-4 text-muted-foreground" />
      </div>
      <ul className="space-y-4">
        {news.map((item) => (
          <li key={item.id} className="space-y-1">
            <h3 className="text-sm font-medium hover:text-blue-600 cursor-pointer">
              • {item.title}
            </h3>
            <p className="text-xs text-muted-foreground">
              {item.readers} • {item.time}
            </p>
          </li>
        ))}
      </ul>
      <Button variant="ghost" className="w-full mt-2 text-muted-foreground text-sm">
        Show more
      </Button>
    </Card>
  );
}