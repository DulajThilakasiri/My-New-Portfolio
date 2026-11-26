import Header from './Header';import Footer from './Footer';
export default function Layout({children}){return <div className="relative z-10 min-h-screen"><Header/><main className="pt-16">{children}</main><Footer/></div>}
