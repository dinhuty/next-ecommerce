import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  return (
    <div className="flex justify-center">
      <div className="grid gap-4 py-4 max-w-[500px]">
        <h2>Login</h2>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Username
          </Label>
          <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Password
          </Label>
          <Input
            id="username"
            defaultValue="@peduarte"
            className="col-span-3"
          />
        </div>
        <div className="">
          <Button type="submit">Login</Button>
        </div>
      </div>
    </div>
  );
}
