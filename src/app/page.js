'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();
  
  return route.push('/instituicao/login');
}