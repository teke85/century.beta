import { School } from '@/types/school'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

type SchoolCardProps = {
  school: School
}

export function SchoolCard({ school }: SchoolCardProps) {
  return (
    <Card className="border max-w-md shadow-xl font-[family-name:var(--font-rethink)]">
      <CardHeader>
        <CardTitle>{school.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 mb-2">{school.town}</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{school.type}</Badge>
          {school.isBoarding && <Badge variant="outline">Boarding</Badge>}
          {school.isSponsored && <Badge variant="default">Sponsored</Badge>}
          {school.isPopular && <Badge variant="secondary">Popular</Badge>}
        </div>
      </CardContent>
    </Card>
  )
}

