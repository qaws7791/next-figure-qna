import { signInGoogleAction } from "@/actions/auth";
import { roboto } from "@/app/fonts";
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
import { cn } from "@/lib/utils";
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
            <DialogContent className="max-w-80">
              <DialogHeader>
                <DialogTitle>로그인</DialogTitle>
                <DialogDescription>
                  로그인을 하시면 더 많은 기능을 이용하실 수 있습니다.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <form action={signInGoogleAction}>
                  <button
                    type="submit"
                    className={cn(
                      roboto.className,
                      "font-medium text-sm text-[#3c4043] bg-white h-10 px-3 flex items-center justify-center shadow rounded-[20px] border border-zinc-100 hover:bg-zinc-50 w-full"
                    )}
                  >
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-[18px]"
                    >
                      <rect
                        width="24"
                        height="24"
                        transform="translate(0.845947)"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.8859 12.2614C23.8859 11.4459 23.8128 10.6618 23.6769 9.90912H12.8459V14.3575H19.035C18.7684 15.795 17.9582 17.013 16.7403 17.8284V20.7139H20.4569C22.6314 18.7118 23.8859 15.7637 23.8859 12.2614Z"
                        fill="#4285F4"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.8459 23.4998C15.9509 23.4998 18.5541 22.47 20.4568 20.7137L16.7402 17.8282C15.7105 18.5182 14.3932 18.9259 12.8459 18.9259C9.85068 18.9259 7.31546 16.903 6.41114 14.1848H2.56909V17.1644C4.46136 20.9228 8.35046 23.4998 12.8459 23.4998Z"
                        fill="#34A853"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.41117 14.1851C6.18117 13.4951 6.05049 12.758 6.05049 12.0001C6.05049 11.2421 6.18117 10.5051 6.41117 9.81506V6.83551H2.56913C1.79027 8.38801 1.34595 10.1444 1.34595 12.0001C1.34595 13.8557 1.79027 15.6121 2.56913 17.1646L6.41117 14.1851Z"
                        fill="#FBBC05"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.8459 5.07386C14.5343 5.07386 16.0502 5.65409 17.242 6.79364L20.5405 3.49523C18.5489 1.63955 15.9457 0.5 12.8459 0.5C8.35046 0.5 4.46136 3.07705 2.56909 6.83545L6.41114 9.815C7.31546 7.09682 9.85068 5.07386 12.8459 5.07386Z"
                        fill="#EA4335"
                      />
                    </svg>
                    <span className="ml-2">Google 계정으로 로그인</span>
                  </button>
                </form>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
}
