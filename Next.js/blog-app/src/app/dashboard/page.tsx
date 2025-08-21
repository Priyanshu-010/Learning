import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'

async function dashboardRoute() {
  const {getUser} = getKindeServerSession();
  const user = await getUser();

  if(!user){
    return redirect("/api/auth/register")
  }
  return (
    <div>Hello from dashboardRoute</div>
  )
}

export default dashboardRoute