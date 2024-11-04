import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Shield, Lock } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold flex items-center gap-2">
            <Shield className="w-8 h-8 text-primary" />
            Secure BFF Architecture
          </CardTitle>
          <CardDescription>
            OAuth2 protected application with Spring Cloud Gateway BFF
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center">
            <Link href="/login">
              <Button size="lg" className="gap-2">
                <Lock className="w-4 h-4" />
                Go to Login
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}