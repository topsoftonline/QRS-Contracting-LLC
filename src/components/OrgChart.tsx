'use client'

import { motion } from 'framer-motion'
import {
  FaUserTie,
  FaHardHat,
  FaClipboardList,
  FaDraftingCompass,
  FaUsers,
  FaTruck,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa'
import type { ReactNode } from 'react'

type Tone = 'exec' | 'mgmt' | 'ops' | 'field'

interface OrgNode {
  id: string
  title: string
  name?: string
  phone?: string
  email?: string
  tone: Tone
  icon: ReactNode
}

const toneStyles: Record<Tone, string> = {
  exec: 'bg-navy text-white border-gold',
  mgmt: 'bg-navy-light text-white border-gold/70',
  ops: 'bg-white text-navy border-navy/15',
  field: 'bg-sand text-navy border-gold/40',
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

function Card({ node, index, className = '' }: { node: OrgNode; index: number; className?: string }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative w-full max-w-[280px] mx-auto rounded-sm border-t-4 shadow-soft px-4 py-4 text-center ${toneStyles[node.tone]} ${className}`}
    >
      <span
        className={`mx-auto mb-3 w-11 h-11 rounded-full inline-flex items-center justify-center ${
          node.tone === 'ops' || node.tone === 'field'
            ? 'bg-navy text-gold'
            : 'bg-gold text-navy'
        }`}
      >
        {node.icon}
      </span>
      {node.name && (
        <p className="font-heading font-extrabold text-sm sm:text-base leading-snug">{node.name}</p>
      )}
      <p
        className={`font-heading font-bold uppercase tracking-wide text-[11px] sm:text-xs mt-1 ${
          node.tone === 'ops' || node.tone === 'field' ? 'text-navy/80' : 'text-gold'
        }`}
      >
        {node.title}
      </p>
      {(node.phone || node.email) && (
        <div
          className={`mt-3 space-y-1 text-[11px] ${
            node.tone === 'ops' || node.tone === 'field' ? 'text-navy/65' : 'text-white/80'
          }`}
        >
          {node.phone && (
            <a href={`tel:${node.phone.replace(/\s/g, '')}`} className="flex items-center justify-center gap-1.5 hover:text-gold">
              <FaPhoneAlt className="text-[9px] text-gold" />
              {node.phone}
            </a>
          )}
          {node.email && (
            <a href={`mailto:${node.email}`} className="flex items-center justify-center gap-1.5 hover:text-gold break-all">
              <FaEnvelope className="text-[9px] text-gold shrink-0" />
              {node.email}
            </a>
          )}
        </div>
      )}
    </motion.div>
  )
}

function Connector({ className = '' }: { className?: string }) {
  return <div className={`mx-auto w-px h-8 bg-gradient-to-b from-gold to-navy/30 ${className}`} />
}

function HLine() {
  return <div className="hidden md:block absolute top-0 left-[12%] right-[12%] h-px bg-navy/20" />
}

const MANAGER: OrgNode = {
  id: 'manager',
  name: 'Shabaan Mohamed',
  title: 'Manager',
  phone: '052-6297501',
  tone: 'exec',
  icon: <FaUserTie />,
}

const SUPPORT: OrgNode[] = [
  {
    id: 'pro',
    title: 'PRO & Liaison Officer',
    tone: 'mgmt',
    icon: <FaClipboardList />,
  },
  {
    id: 'advisory',
    title: 'Advisory',
    tone: 'mgmt',
    icon: <FaUsers />,
  },
]

const PROJECTS_MGR: OrgNode = {
  id: 'pm',
  name: 'Shabaan Mohd',
  title: 'Projects Manager',
  phone: '052-6227501',
  email: 'shabaan@qrscontracting.com',
  tone: 'exec',
  icon: <FaHardHat />,
}

const DEPARTMENTS: OrgNode[] = [
  {
    id: 'admin',
    title: 'Administration / Fin. & Accounts',
    tone: 'ops',
    icon: <FaClipboardList />,
  },
  {
    id: 'procurement',
    name: 'AMR',
    title: 'Procurement',
    email: 'qrsadmin@gmail.com',
    tone: 'ops',
    icon: <FaTruck />,
  },
  {
    id: 'cad',
    name: 'M. Jaffer',
    title: 'CAD Supervisor',
    tone: 'ops',
    icon: <FaDraftingCompass />,
  },
]

const SITE: OrgNode = {
  id: 'site',
  name: 'Sohail',
  title: 'Site Engineer',
  phone: '056-6362339',
  tone: 'ops',
  icon: <FaHardHat />,
}

const SUPPLIERS: OrgNode = {
  id: 'suppliers',
  title: 'Suppliers & Sub-Contractors',
  tone: 'field',
  icon: <FaTruck />,
}

const FIELD: OrgNode[] = [
  { id: 'foreman', title: 'Foreman', tone: 'field', icon: <FaHardHat /> },
  { id: 'surveyor', title: 'Surveyor', tone: 'field', icon: <FaDraftingCompass /> },
  { id: 'ganger', title: 'Asst. PM / Gangers', tone: 'field', icon: <FaUsers /> },
  { id: 'labor', title: 'Skilled & Unskilled Labor', tone: 'field', icon: <FaHardHat /> },
]

export function OrgChart() {
  return (
    <div className="relative">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[480px] h-[480px] rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="relative flex flex-col items-center">
        {/* Level 1 — Manager */}
        <Card node={MANAGER} index={0} />
        <Connector />

        {/* Level 2 — Support */}
        <div className="relative w-full max-w-3xl">
          <HLine />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 pt-0 md:pt-0">
            {SUPPORT.map((n, i) => (
              <div key={n.id} className="relative">
                <div className="hidden md:block absolute -top-0 left-1/2 -translate-x-1/2 w-px h-4 bg-navy/20" />
                <Card node={n} index={1 + i} />
              </div>
            ))}
          </div>
        </div>

        <Connector />

        {/* Level 3 — Projects Manager */}
        <Card node={PROJECTS_MGR} index={3} />
        <Connector />

        {/* Level 4 — Departments */}
        <div className="relative w-full max-w-5xl">
          <HLine />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {DEPARTMENTS.map((n, i) => (
              <div key={n.id} className="relative">
                <div className="hidden md:block absolute -top-0 left-1/2 -translate-x-1/2 w-px h-4 bg-navy/20" />
                <Card node={n} index={4 + i} />
              </div>
            ))}
          </div>
        </div>

        <Connector />

        {/* Level 5 — Site + Suppliers */}
        <div className="relative w-full max-w-3xl">
          <HLine />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            <div className="relative">
              <div className="hidden md:block absolute -top-0 left-1/2 -translate-x-1/2 w-px h-4 bg-navy/20" />
              <Card node={SITE} index={7} />
            </div>
            <div className="relative">
              <div className="hidden md:block absolute -top-0 left-1/2 -translate-x-1/2 w-px h-4 bg-navy/20" />
              <Card node={SUPPLIERS} index={8} />
            </div>
          </div>
        </div>

        <Connector />

        {/* Level 6 — Field team */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-navy/50 text-[11px] uppercase tracking-[0.2em] mb-4"
        >
          Site Operations Team
        </motion.p>
        <div className="w-full max-w-5xl grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {FIELD.map((n, i) => (
            <Card key={n.id} node={n} index={9 + i} className="max-w-none" />
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-[11px] sm:text-xs font-heading font-semibold uppercase tracking-wide text-navy/70"
        >
          <span className="inline-flex items-center gap-2">
            <i className="w-3.5 h-3.5 rounded-sm bg-navy border border-gold" /> Leadership
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="w-3.5 h-3.5 rounded-sm bg-navy-light border border-gold/70" /> Support
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="w-3.5 h-3.5 rounded-sm bg-white border border-navy/20" /> Departments
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="w-3.5 h-3.5 rounded-sm bg-sand border border-gold/40" /> Field Team
          </span>
        </motion.div>
      </div>
    </div>
  )
}
