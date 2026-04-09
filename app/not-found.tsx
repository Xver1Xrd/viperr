import Link from "next/link";
import { PageContainer } from "@/components/site/layout/PageContainer";

export default function NotFound() {
  return (
    <PageContainer className="section-space">
      <div className="surface-card mx-auto max-w-3xl p-8 sm:p-10">
        <div className="club-tag">
          404
        </div>
        <h1 className="club-title mt-4 font-display text-5xl text-white sm:text-6xl">
          Такой страницы здесь нет
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
          Вернуться можно на главную, в каталог релизов или на отдельные страницы Kai Angel
          и 9mice.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="club-button"
          >
            На главную
          </Link>
          <Link
            href="/releases"
            className="club-button-secondary"
          >
            Смотреть релизы
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
