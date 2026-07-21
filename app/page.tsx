import Link from 'next/link';
import { 
  Users, 
  UserPlus, 
  Search, 
  ShieldCheck, 
  ArrowRight, 
  GraduationCap, 
  TrendingUp, 
  Award, 
  BookOpen, 
  Sparkles,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

export default function Home() {
  const stats = [
    { label: 'Enrolled Students', value: '1,248', change: '+12% this term', icon: Users, color: 'from-blue-500 to-indigo-500' },
    { label: 'Academic Majors', value: '18', change: 'Across 4 faculties', icon: BookOpen, color: 'from-purple-500 to-pink-500' },
    { label: 'Average GPA', value: '3.62', change: 'Top 5% nationwide', icon: Award, color: 'from-amber-500 to-orange-500' },
    { label: 'Retention Rate', value: '96.4%', change: '+3.2% vs last year', icon: TrendingUp, color: 'from-emerald-500 to-teal-500' },
  ];

  const features = [
    {
      icon: Search,
      title: 'Smart Directory & Filtering',
      description: 'Instant lookup with real-time text matching, major filtering, and dynamic view toggling.',
      link: '/student',
      linkText: 'Explore Directory',
    },
    {
      icon: UserPlus,
      title: 'Streamlined Enrollment Form',
      description: 'Multi-section registration with input validation for student profiles and academic info.',
      link: '/student/form',
      linkText: 'Add New Student',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Access & Auth',
      description: 'Integrated login, account registration, and password recovery workflows for faculty & students.',
      link: '/auth/login',
      linkText: 'Sign In to Portal',
    },
  ];

  const quickLinks = [
    { title: 'Student Directory', desc: 'Browse all student profiles & records', href: '/student', badge: 'Active' },
    { title: 'New Student Form', desc: 'Register a new student into system', href: '/student/form', badge: 'Form' },
    { title: 'Student Profile View', desc: 'View detailed academic progress', href: '/student/studentdetails?id=101', badge: 'Profile' },
    { title: 'User Registration', desc: 'Create a new portal account', href: '/auth/register', badge: 'Auth' },
  ];

  return (
    <div className="space-y-12 py-4">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl gradient-bg-subtle border border-indigo-100 dark:border-indigo-900/40 p-8 sm:p-12 lg:p-16 text-center sm:text-left">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/80 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Next.js 16 + Tailwind CSS v4 Powered</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Modern Student <br className="hidden sm:inline" />
            <span className="gradient-text">Management Portal</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            A high-performance educational directory platform designed for seamlessly managing student records, tracking academic progress, and facilitating quick admissions.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Link
              href="/student"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white gradient-bg-accent hover:opacity-95 shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02]"
            >
              <Users className="w-5 h-5" />
              Open Student Directory
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>

            <Link
              href="/student/form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
            >
              <UserPlus className="w-5 h-5 text-indigo-500" />
              Add New Student
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="glass-panel p-6 rounded-2xl hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all hover:shadow-md group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </span>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-xs group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                {stat.change}
              </p>
            </div>
          );
        })}
      </section>

      {/* Quick Navigation Cards Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Portal Navigation Quick Access</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Directly jump to any page in the application</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group p-5 rounded-2xl glass-panel hover:bg-white dark:hover:bg-slate-900 border border-slate-200/80 dark:border-slate-800 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                  {item.badge}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Feature Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <div
              key={i}
              className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-4 hover:border-indigo-300 dark:hover:border-indigo-800 transition-all"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-200 dark:border-indigo-800">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <Link
                href={feature.link}
                className="inline-flex items-center text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 group"
              >
                {feature.linkText}
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
}
