import Link from 'next/link'

function displayDateTime(date: string): string {
  let d = new Date(date)
  return (
    d.toLocaleString('en-gb', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }) +
    ' • ' +
    d.toLocaleTimeString('en-gb', {
      hour: '2-digit',
      minute: '2-digit',
    })
  )
}

export default function DateLine({ date }: { date: string }) {
  return (
    <>
      <div className="text-xs">{displayDateTime(date)}</div>
    </>
  )
}
