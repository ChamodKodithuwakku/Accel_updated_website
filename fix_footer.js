
const fs = require("fs");

let content = fs.readFileSync("src/components/layout/Footer.jsx", "utf-8");

const newBottom = `        {/* Bottom copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 <strong>SLIIT Kandy Uni</strong> - ACCEL 7.0 Organizing Committee.
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50">
              <span className="text-slate-400">Developed by</span>
              <a 
                href="YOUR_LINKEDIN_URL" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1 group transition-colors"
              >
                Theekshana
                <svg className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>`;

const startIdx = content.indexOf("{/* Bottom copyright */}");
const endIdx = content.indexOf("      </div>\n    </footer>");

if (startIdx !== -1 && endIdx !== -1) {
    content = content.substring(0, startIdx) + newBottom + "\n\n" + content.substring(endIdx);
    fs.writeFileSync("src/components/layout/Footer.jsx", content, "utf-8");
    console.log("Footer updated");
} else {
    console.log("Could not find replacement bounds");
}

