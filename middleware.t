// File: middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const userAgent = request.headers.get('user-agent') || ''
    const isTelegramWebApp = request.headers.get('X-Telegram-Web-App') === 'true'

    if (!isTelegramWebApp && !userAgent.toLowerCase().includes('telegramwebapp')) {
        // Redirect to an error page or show a message
        return NextResponse.redirect(new URL('/unauthorized', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
// // middleware.ts
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// import { jwtVerify } from 'jose'

// // This function can be marked `async` if using `await` inside
// export async function middleware(request: NextRequest) {
//     const token = request.nextUrl.searchParams.get('token')

//     // If there's no token, redirect to an error page
//     if (!token) {
//         return NextResponse.redirect(new URL('/error?message=No token provided', request.url))
//     }

//     try {
//         // Verify the token
//         const secret = new TextEncoder().encode(
//             process.env.JWT_SECRET || 'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2'
//         )
//         const { payload } = await jwtVerify(token, secret)

//         // If verification is successful, attach the payload to the request
//         // so it can be accessed in the page component
//         const requestHeaders = new Headers(request.headers)
//         requestHeaders.set('x-payload', JSON.stringify(payload))

//         return NextResponse.next({
//             request: {
//                 headers: requestHeaders,
//             },
//         })
//     } catch (error) {
//         // If verification fails, redirect to an error page
//         console.error('Token verification failed:', error)
//         return NextResponse.redirect(new URL('/error?message=Invalid token', request.url))
//     }
// }

// // See "Matching Paths" below to learn more
// export const config = {
//     matcher: '/payment',
// }

// pages/error.tsx
// File: middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || ''
  const isTelegramWebApp = request.headers.get('X-Telegram-Web-App') === 'true'

  if (!isTelegramWebApp && !userAgent.toLowerCase().includes('telegramwebapp')) {
    // Set a custom header instead of redirecting
    const response = NextResponse.next()
    response.headers.set('X-Unauthorized', 'true')
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

// File: app/layout.tsx
import { headers } from 'next/headers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = headers()
  const isUnauthorized = headersList.get('X-Unauthorized') === 'true'

  if (isUnauthorized) {
    return (
      <html lang="en">
        <body>
          <div style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            backgroundColor: 'rgba(0,0,0,0.8)', 
            color: 'white', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            zIndex: 9999 
          }}>
            <h1>Unauthorized Access</h1>
            <p>This application is only accessible through the Telegram Web App.</p>
          </div>
        </body>
      </html>
    )
  }

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}