interface Font {
  family: string;
  category: string;
  source: string;
  variants: string[];
  preview: string;
}

interface FontCardProps {
  font: Font;
}

export default function FontCard({ font }: FontCardProps) {
  return (
    <div className="flex flex-col gap-8 rounded-xl p-4 bg-background border hover:bg-muted">
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col gap-0">
          <h2 className="font-bold text-muted-foreground">{font.family}</h2>
          <p className="text-sm text-muted-foreground">{font.category}</p>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            {font.variants.length} variants
          </span>
        </div>

      </div>
      <link rel="stylesheet" href={font.preview} />

      <p className="text-3xl font-normal" style={{ fontFamily: font.family }}>The quick brown fox jumps over the lazy dog.</p>

      <p className="font-normal">{font.source}</p>
    </div>
  );
}
