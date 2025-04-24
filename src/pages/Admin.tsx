
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Article } from "@/types/article";
import { useState } from "react";
import { articlesByCategory } from "@/data/mockArticles";

const Admin = () => {
  const [articles] = useState<Article[]>(
    Object.values(articlesByCategory).flat()
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Admin Panel</h1>
          <Button>Add New Article</Button>
        </div>
        
        <div className="rounded-md border bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {articles.map((article) => (
                <TableRow key={article.id}>
                  <TableCell className="font-medium">{article.title}</TableCell>
                  <TableCell>{article.category}</TableCell>
                  <TableCell>{article.author}</TableCell>
                  <TableCell>{article.date}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="destructive" size="sm">Delete</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
