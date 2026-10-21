/** Remounts on client-side route transitions without delaying navigation. */
export default function Template({children}:{children:React.ReactNode}) {
 return <div className="route-transition">{children}</div>;
}
