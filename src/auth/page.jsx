import React, { useState } from "react";
import { motion } from "framer-motion";


export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin");

  return (
    <div className="flex flex-col min-h-screen bg-black text-amber-500">
      <SiteHeader />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="flex mb-8">
            <button
              className={`flex-1 p-4 text-lg font-semibold ${
                activeTab === "signin"
                  ? "text-amber-500 border-b-2 border-amber-500"
                  : "text-amber-500/60"
              }`}
              onClick={() => setActiveTab("signin")}
            >
              Sign In
            </button>
            <button
              className={`flex-1 p-4 text-lg font-semibold ${
                activeTab === "signup"
                  ? "text-amber-500 border-b-2 border-amber-500"
                  : "text-amber-500/60"
              }`}
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </button>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "signin" ? <SignInForm /> : <SignUpForm />}
          </motion.div>
        </div>
      </main>
    </div>
  );
}

function SignInForm() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-amber-500">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="bg-black border-amber-500 text-amber-500 placeholder-amber-500/50"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="text-amber-500">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          className="bg-black border-amber-500 text-amber-500 placeholder-amber-500/50"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-amber-500 text-black hover:bg-amber-600"
      >
        Sign In
      </Button>
    </form>
  );
}

function SignUpForm() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-amber-500">
          Name
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="Enter your name"
          className="bg-black border-amber-500 text-amber-500 placeholder-amber-500/50"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-amber-500">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="bg-black border-amber-500 text-amber-500 placeholder-amber-500/50"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="text-amber-500">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="Create a password"
          className="bg-black border-amber-500 text-amber-500 placeholder-amber-500/50"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-amber-500 text-black hover:bg-amber-600"
      >
        Sign Up
      </Button>
    </form>
  );
}
