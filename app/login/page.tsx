"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn } from "lucide-react";

export default function LoginPage() {
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    const fetchCsrfToken = async () => {
      const response = await fetch("/api/auth/csrf");
      const token = await response.text();
      setCsrfToken(token);
    };
    fetchCsrfToken();
  }, []);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/oauth2/authorization/default", {
        method: "GET",
        credentials: "include",
        headers: {
          "X-XSRF-TOKEN": csrfToken,
        },
      });
      
      if (response.ok) {
        // The gateway will handle the redirect to the authorization server
        window.location.href = response.url;
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <Card className="w-[400px] shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <LogIn className="w-6 h-6" />
            Sign In
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={handleLogin}
            className="w-full"
            size="lg"
          >
            Continue to Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}