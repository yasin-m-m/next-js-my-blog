export default function Footer() {
    const d = new Date();
    let year = d.getFullYear();
    return  <footer className="fixed inset-x-0 bottom-0 flex  flex-col items-center bg-neutral-900 text-center text-white">
                <div className="w-full p-4 text-center" style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
                    © {year} 
                </div>
            </footer>
}