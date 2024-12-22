"use client"

import { useState } from "react"
import { SignUpForm } from "@/components/sign-up-form"
import { SignInForm } from "@/components/sign-in-form"
import { Button } from "@/components/ui/button"

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<"signup" | "signin">("signup")

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-8">
        <h1 className="text-3xl font-bold text-center text-amber-500">Welcome to Aurum</h1>
        <div className="flex space-x-4 mb-8">
          <Button
            onClick={() => setActiveTab("signup")}
            className={`w-1/2 ${
              activeTab === "signup"
                ? "bg-amber-500 text-black"
                : "bg-black text-amber-500 border border-amber-500"
            }`}
          >
            Sign Up
          </Button>
          <Button
            onClick={() => setActiveTab("signin")}
            className={`w-1/2 ${
              activeTab === "signin"
                ? "bg-amber-500 text-black"
                : "bg-black text-amber-500 border border-amber-500"
            }`}
          >
            Sign In
          </Button>
        </div>
        {activeTab === "signup" ? <SignUpForm /> : <SignInForm />}
      </div>
    </div>
  )
}

