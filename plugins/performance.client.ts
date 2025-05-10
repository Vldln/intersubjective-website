// plugins/performance.client.ts
export default defineNuxtPlugin((nuxtApp) => {
  // Отложенная загрузка некритичных ресурсов
  const deferNonCritical = () => {
    // Отложенное выполнение скриптов после загрузки страницы
    window.addEventListener('load', () => {
      // Добавляем атрибуты loading="lazy" для всех изображений, которые не имеют loading="eager"
      const images = document.querySelectorAll('img:not([loading="eager"])');
      images.forEach(img => {
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
      });
    });
  };

  // Следим за метриками производительности
  const observePerformance = () => {
    if ('PerformanceObserver' in window) {
      // Создаем наблюдатель за LCP
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          const lcp = entries[entries.length - 1];
          console.log('LCP:', lcp);
        }
      });
      
      // Следим за LCP
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      
      // Наблюдаем за FID
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          const fid = entries[0];
          console.log('FID:', fid);
        }
      });
      
      fidObserver.observe({ type: 'first-input', buffered: true });
    }
  };

  // Выполняем при монтировании приложения
  nuxtApp.hook('app:mounted', () => {
    setTimeout(() => {
      deferNonCritical();
      observePerformance();
    }, 0);
  });
}); 