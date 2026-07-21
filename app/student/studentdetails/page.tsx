import Link from 'next/link';
import { 
  ArrowLeft, 
  GraduationCap, 
  Mail, 
  Award, 
  Calendar, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck, 
  UserCheck, 
  MapPin, 
  Phone 
} from 'lucide-react';

interface Props {
  searchParams?: Promise<{ id?: string }>;
}

export default async function StudentDetailsPage({ searchParams }: Props) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const studentId = resolvedSearchParams.id || '101';

  // Mock Student Database
  const studentMap: Record<string, {
    name: string;
    major: string;
    email: string;
    phone: string;
    location: string;
    gpa: string;
    credits: number;
    attendance: string;
    status: string;
    enrolledTerm: string;
    advisor: string;
    courses: { code: string; title: string; credits: number; grade: string }[];
  }> = {
    '101': {
      name: 'John Doe',
      major: 'Computer Science',
      email: 'john.doe@university.edu',
      phone: '+1 (555) 019-2834',
      location: 'San Francisco, CA',
      gpa: '3.85',
      credits: 86,
      attendance: '96.5%',
      status: 'Active Student',
      enrolledTerm: 'Fall 2022',
      advisor: 'Dr. Alan Turing',
      courses: [
        { code: 'CS-301', title: 'Data Structures & Algorithms', credits: 4, grade: 'A' },
        { code: 'CS-302', title: 'Database Systems & SQL', credits: 3, grade: 'A-' },
        { code: 'CS-304', title: 'Full Stack Web Engineering', credits: 4, grade: 'A+' },
        { code: 'MATH-201', title: 'Discrete Mathematics', credits: 3, grade: 'B+' },
      ],
    },
    '102': {
      name: 'Jane Smith',
      major: 'Information Technology',
      email: 'jane.smith@university.edu',
      phone: '+1 (555) 014-9921',
      location: 'Austin, TX',
      gpa: '3.92',
      credits: 92,
      attendance: '98.0%',
      status: 'Active Student',
      enrolledTerm: 'Spring 2023',
      advisor: 'Prof. Ada Lovelace',
      courses: [
        { code: 'IT-201', title: 'Network Infrastructure', credits: 3, grade: 'A' },
        { code: 'IT-305', title: 'Cloud Computing & AWS', credits: 4, grade: 'A+' },
        { code: 'SEC-101', title: 'Cyber Security Essentials', credits: 3, grade: 'A' },
      ],
    },
    '103': {
      name: 'Alex Johnson',
      major: 'Software Engineering',
      email: 'alex.j@university.edu',
      phone: '+1 (555) 018-4432',
      location: 'Seattle, WA',
      gpa: '3.78',
      credits: 110,
      attendance: '94.2%',
      status: 'Graduating Senior',
      enrolledTerm: 'Fall 2021',
      advisor: 'Dr. Grace Hopper',
      courses: [
        { code: 'SE-401', title: 'Software Architecture & Design', credits: 4, grade: 'A' },
        { code: 'SE-409', title: 'Senior Capstone Project', credits: 6, grade: 'A+' },
      ],
    },
  };

  const student = studentMap[studentId] || {
    name: `Student #${studentId}`,
    major: 'Computer Science',
    email: `student${studentId}@university.edu`,
    phone: '+1 (555) 000-0000',
    location: 'Campus Residence',
    gpa: '3.75',
    credits: 75,
    attendance: '95.0%',
    status: 'Active Student',
    enrolledTerm: 'Fall 2023',
    advisor: 'Faculty Office',
    courses: [
      { code: 'CS-101', title: 'Introduction to Programming', credits: 4, grade: 'A' },
      { code: 'ENG-102', title: 'Academic Writing', credits: 3, grade: 'A-' },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <Link
          href="/student"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Student Directory
        </Link>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Verified Student Record
        </span>
      </div>

      {/* Main Profile Header Card */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-5">
            {/* Avatar Pill */}
            <div className="w-20 h-20 rounded-3xl gradient-bg-accent text-white font-extrabold text-2xl flex items-center justify-center shadow-xl shadow-indigo-500/25 ring-4 ring-white dark:ring-slate-900 shrink-0">
              {student.name.split(' ').map(n => n[0]).join('')}
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {student.name}
                </h1>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                  ID #{studentId}
                </span>
              </div>
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                {student.major}
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-1 flex-wrap">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" />
                  {student.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" />
                  {student.phone}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {student.location}
                </span>
              </div>
            </div>
          </div>

          {/* Action Badge */}
          <div className="flex flex-col items-end gap-2 w-full sm:w-auto">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
              {student.status}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Enrolled: {student.enrolledTerm}
            </span>
          </div>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-panel p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold uppercase">Cumulative GPA</span>
            <Award className="w-4 h-4 text-amber-500" />
          </div>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">{student.gpa} <span className="text-xs font-normal text-slate-500">/ 4.0</span></p>
          <p className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">Dean&apos;s Honors List</p>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold uppercase">Earned Credits</span>
            <BookOpen className="w-4 h-4 text-indigo-500" />
          </div>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">{student.credits} <span className="text-xs font-normal text-slate-500">hrs</span></p>
          <p className="text-[11px] text-slate-500">Major Core Completed</p>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold uppercase">Attendance</span>
            <UserCheck className="w-4 h-4 text-emerald-500" />
          </div>
          <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{student.attendance}</p>
          <p className="text-[11px] text-slate-500">Current Semester</p>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold uppercase">Faculty Advisor</span>
            <ShieldCheck className="w-4 h-4 text-purple-500" />
          </div>
          <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{student.advisor}</p>
          <p className="text-[11px] text-slate-500">Department Chair</p>
        </div>
      </div>

      {/* Enrolled Courses Table Card */}
      <div className="glass-panel rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-500" />
            Enrolled Academic Courses
          </h2>
          <span className="text-xs text-slate-500 font-medium">{student.courses.length} Active Modules</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <th className="py-3 px-4">Code</th>
                <th className="py-3 px-4">Course Title</th>
                <th className="py-3 px-4">Credits</th>
                <th className="py-3 px-4 text-right">Grade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-sm">
              {student.courses.map((course) => (
                <tr key={course.code} className="hover:bg-slate-50/60 dark:hover:bg-slate-900/40">
                  <td className="py-3.5 px-4 font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    {course.code}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">
                    {course.title}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">
                    {course.credits} Credits
                  </td>
                  <td className="py-3.5 px-4 text-right font-bold text-slate-900 dark:text-white">
                    <span className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs border border-indigo-200 dark:border-indigo-800">
                      {course.grade}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}