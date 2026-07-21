'use client';

import Link from 'next/link';
import { useState } from 'react';
import { 
  Users, 
  UserPlus, 
  Search, 
  Filter, 
  LayoutGrid, 
  List, 
  GraduationCap, 
  Mail, 
  ExternalLink,
  Award,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface Student {
  id: string;
  name: string;
  major: string;
  email: string;
  gpa: string;
  status: 'Active' | 'Graduating' | 'On Leave';
  enrolledDate: string;
  avatarBg: string;
}

const initialStudents: Student[] = [
  { 
    id: '101', 
    name: 'John Doe', 
    major: 'Computer Science', 
    email: 'john.doe@university.edu', 
    gpa: '3.85', 
    status: 'Active', 
    enrolledDate: 'Fall 2023',
    avatarBg: 'bg-indigo-500'
  },
  { 
    id: '102', 
    name: 'Jane Smith', 
    major: 'Information Technology', 
    email: 'jane.smith@university.edu', 
    gpa: '3.92', 
    status: 'Active', 
    enrolledDate: 'Spring 2023',
    avatarBg: 'bg-purple-500'
  },
  { 
    id: '103', 
    name: 'Alex Johnson', 
    major: 'Software Engineering', 
    email: 'alex.j@university.edu', 
    gpa: '3.78', 
    status: 'Graduating', 
    enrolledDate: 'Fall 2022',
    avatarBg: 'bg-emerald-500'
  },
  { 
    id: '104', 
    name: 'Sophia Martinez', 
    major: 'Data Science', 
    email: 'sophia.m@university.edu', 
    gpa: '4.00', 
    status: 'Active', 
    enrolledDate: 'Fall 2024',
    avatarBg: 'bg-pink-500'
  },
  { 
    id: '105', 
    name: 'Marcus Vance', 
    major: 'Cybersecurity', 
    email: 'marcus.v@university.edu', 
    gpa: '3.65', 
    status: 'Active', 
    enrolledDate: 'Spring 2024',
    avatarBg: 'bg-amber-500'
  },
];

export default function StudentListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMajor, setSelectedMajor] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const majors = ['All', 'Computer Science', 'Information Technology', 'Software Engineering', 'Data Science', 'Cybersecurity'];

  const filteredStudents = initialStudents.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          s.major.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          s.id.includes(searchTerm);
    const matchesMajor = selectedMajor === 'All' || s.major === selectedMajor;
    return matchesSearch && matchesMajor;
  });

  return (
    <div className="space-y-8 py-2">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
              Live Database
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">{filteredStudents.length} Records Shown</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
            Student Directory
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Browse, search, and manage enrolled student profiles across all academic faculties.
          </p>
        </div>

        <Link
          href="/student/form"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white gradient-bg-accent hover:opacity-95 shadow-md shadow-indigo-500/25 transition-all hover:scale-[1.02] shrink-0"
        >
          <UserPlus className="w-4 h-4" />
          + Add New Student
        </Link>
      </div>

      {/* Metric Cards Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-panel p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Total Records</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{initialStudents.length}</p>
        </div>
        <div className="glass-panel p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Active Status</p>
          <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">
            {initialStudents.filter(s => s.status === 'Active').length}
          </p>
        </div>
        <div className="glass-panel p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Average GPA</p>
          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-1">3.84</p>
        </div>
        <div className="glass-panel p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Graduating Term</p>
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-1">1</p>
        </div>
      </div>

      {/* Filter & View Mode Bar */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search by name, major, or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
        </div>

        {/* Major Filter Dropdown & View Mode */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <select
              value={selectedMajor}
              onChange={(e) => setSelectedMajor(e.target.value)}
              className="py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              {majors.map((m) => (
                <option key={m} value={m}>{m === 'All' ? 'All Majors' : m}</option>
              ))}
            </select>
          </div>

          {/* Toggle View Mode Buttons */}
          <div className="flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition-all ${
                viewMode === 'grid'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                  : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded-lg transition-all ${
                viewMode === 'table'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                  : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
              }`}
              title="Table View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Student List View */}
      {filteredStudents.length === 0 ? (
        <div className="glass-panel p-12 rounded-3xl text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-500 flex items-center justify-center mx-auto">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">No students matched</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            Try adjusting your search criteria or filter options to find the student profile.
          </p>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all hover:shadow-lg hover:-translate-y-0.5 space-y-4 group"
            >
              {/* Header Avatar & Status */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl ${student.avatarBg} text-white flex items-center justify-center font-bold text-lg shadow-md`}>
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {student.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">ID: #{student.id}</p>
                  </div>
                </div>

                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                  student.status === 'Active' 
                    ? 'bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
                    : 'bg-purple-50 dark:bg-purple-950/70 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800'
                }`}>
                  {student.status}
                </span>
              </div>

              {/* Details Details */}
              <div className="space-y-2 text-xs pt-2 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                    Major:
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-slate-200">{student.major}</span>
                </div>
                <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    GPA Score:
                  </span>
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">{student.gpa} / 4.0</span>
                </div>
                <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    Email:
                  </span>
                  <span className="font-medium text-slate-700 dark:text-slate-300 truncate max-w-[170px]">
                    {student.email}
                  </span>
                </div>
              </div>

              {/* Action Button Link */}
              <div className="pt-2">
                <Link
                  href={`/student/studentdetails?id=${student.id}`}
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all flex items-center justify-center gap-1.5"
                >
                  View Profile Details
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Table View */
        <div className="glass-panel rounded-3xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <th className="py-3.5 px-6">Student</th>
                  <th className="py-3.5 px-6">ID</th>
                  <th className="py-3.5 px-6">Major</th>
                  <th className="py-3.5 px-6">GPA</th>
                  <th className="py-3.5 px-6">Status</th>
                  <th className="py-3.5 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-sm">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-900/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl ${student.avatarBg} text-white flex items-center justify-center font-bold text-xs`}>
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white">{student.name}</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">{student.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-mono text-xs text-slate-500 dark:text-slate-400">#{student.id}</td>
                    <td className="py-4 px-6 text-slate-700 dark:text-slate-300 font-medium">{student.major}</td>
                    <td className="py-4 px-6 font-bold text-indigo-600 dark:text-indigo-400">{student.gpa}</td>
                    <td className="py-4 px-6">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                        student.status === 'Active' 
                          ? 'bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
                          : 'bg-purple-50 dark:bg-purple-950/70 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800'
                      }`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <Link
                        href={`/student/studentdetails?id=${student.id}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        Profile <ExternalLink className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}