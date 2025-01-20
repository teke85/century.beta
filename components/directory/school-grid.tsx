import { School } from '@/types/school'
import { SchoolCard } from './school-card'

type SchoolGridProps = {
  title: string
  schools: School[]
}

export function SchoolGrid({ title, schools }: SchoolGridProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-rethink)]">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schools.slice(0, 3).map((school) => (
          <SchoolCard key={school.id} school={school} />
        ))}
      </div>
    </div>
  )
}

