import { Fragment, type ReactNode } from "react";

interface LegalDocumentContentProps {
  content: string;
}

type ListKind = "ordered" | "unordered";

function renderInline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2).trim()}</strong>;
    }

    return <Fragment key={index}>{part}</Fragment>;
  });
}

export function LegalDocumentContent({ content }: LegalDocumentContentProps) {
  const lines = content.split("\n").map((line) => line.trim());
  const blocks: ReactNode[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];
  let listKind: ListKind | undefined;

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      blocks.push(
        <p key={`paragraph-${blocks.length}`}>{renderInline(paragraph.join(" "))}</p>,
      );
      paragraph = [];
    }
  };

  const flushList = () => {
    if (listKind && listItems.length > 0) {
      const List = listKind === "ordered" ? "ol" : "ul";
      blocks.push(
        <List key={`list-${blocks.length}`} className="list-outside space-y-1 pl-5 marker:text-muted-foreground">
          {listItems.map((item, index) => (
            <li key={index}>{renderInline(item)}</li>
          ))}
        </List>,
      );
    }
    listItems = [];
    listKind = undefined;
  };

  for (const line of lines) {
    const heading = /^(#{1,2})\s+(.+)$/.exec(line);
    const orderedItem = /^\d+\.\s+(.+)$/.exec(line);
    const unorderedItem = /^-\s+(.+)$/.exec(line);

    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1]!;
      const text = heading[2]!;
      const Heading = level.length === 1 ? "h2" : "h3";
      blocks.push(
        <Heading
          key={`heading-${blocks.length}`}
          className={Heading === "h2" ? "pt-2 text-xl font-semibold text-foreground" : "pt-1 text-base font-semibold text-foreground"}
        >
          {renderInline(text)}
        </Heading>,
      );
    } else if (orderedItem || unorderedItem) {
      flushParagraph();
      const nextKind: ListKind = orderedItem ? "ordered" : "unordered";
      if (listKind && listKind !== nextKind) {
        flushList();
      }
      listKind = nextKind;
      const match = orderedItem ?? unorderedItem!;
      listItems.push(match[1]!);
    } else if (line === "---") {
      flushParagraph();
      flushList();
    } else if (line === "") {
      flushParagraph();
      flushList();
    } else {
      flushList();
      paragraph.push(line);
    }
  }

  flushParagraph();
  flushList();

  return <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">{blocks}</div>;
}
