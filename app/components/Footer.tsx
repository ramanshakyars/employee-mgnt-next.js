import Link from 'next/link';
import { GraduationCap, Heart, ShieldCheck, BookOpen, HelpCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg gradient-bg-accent flex items-center justify-center text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white">EduPulse Pro</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Empowering educational institutions with modern student directory management, enrollment tracking, and academic insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li><Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Portal Home</Link></li>
              <li><Link href="/student" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Student Directory</Link></li>
              <li><Link href="/student/form" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Add New Student</Link></li>
            </ul>
          </div>

          {/* Authentication */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">Account & Auth</h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li><Link href="/auth/login" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Sign In</Link></li>
              <li><Link href="/auth/register" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Create Account</Link></li>
              <li><Link href="/auth/forgetpassword" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Reset Password</Link></li>
            </ul>
          </div>

          {/* Support / Info */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">System Info</h4>
            <div className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Next.js 16 App Router</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-500" />
                <span>React 19 & Tailwind v4</span>
              </div>
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-purple-500" />
                <span>Learning Project Demo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} EduPulse Pro. Designed for Student Management.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for modern web learning
          </p>
        </div>
      </div>
    </footer>
  );
}
