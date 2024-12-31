import { signInGoogleAction } from "@/actions/auth";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UserButton from "@/components/user-button";
import { auth } from "@/lib/auth";
import Link from "next/link";
import React from "react";

export default async function Navbar() {
  const session = await auth();

  const user = session?.user;
  return (
    <div className="fixed top-4 left-4 right-4 border border-zinc-200 rounded-3xl p-3 backdrop-saturate-150 backdrop-blur-xl flex justify-between items-center bg-zinc-50/50 z-50">
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div>
        {user ? (
          <UserButton user={user} />
        ) : (
          <Dialog>
            <DialogTrigger asChild>
              <Button>로그인</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>로그인</DialogTitle>
                <DialogDescription>
                  로그인을 하시면 더 많은 기능을 이용하실 수 있습니다.
                </DialogDescription>
              </DialogHeader>
              <div>
                <form action={signInGoogleAction}>
                  <Button type="submit">구글로 로그인</Button>
                </form>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
}
