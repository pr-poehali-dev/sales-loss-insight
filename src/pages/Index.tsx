import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заявка отправлена! Свяжемся в течение 1 рабочего дня.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Аудит Продаж
          </h1>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('results')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Результаты
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Тарифы
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Контакты
            </button>
          </div>
          <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            Оставить заявку
          </Button>
        </nav>
      </div>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg px-6 py-2">
              📉 Найдём ваши потерянные деньги
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Покажем, где вы теряете
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                деньги в продажах
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
              На живых примерах. За 5 дней. Без CRM. Без боли.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="flex items-center gap-2 text-gray-700">
                <Icon name="CheckCircle2" className="text-green-500" size={20} />
                <span>Без подключения CRM</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Icon name="Shield" className="text-blue-500" size={20} />
                <span>Полная конфиденциальность</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Icon name="Zap" className="text-purple-500" size={20} />
                <span>Результат за 5 дней</span>
              </div>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')} 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              Хочу разбор 🚀
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4">
            📌 Что предлагаем
          </h3>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Мы берём 5 ваших слитых сделок и показываем вам:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Search', title: 'Ошибки', desc: 'которые стоили вам выручки', color: 'from-red-500 to-orange-500' },
              { icon: 'DollarSign', title: 'Места потерь', desc: 'где вы могли закрыть, но не дожали', color: 'from-green-500 to-emerald-500' },
              { icon: 'TrendingUp', title: 'Потенциал', desc: 'что можно было спасти и как', color: 'from-blue-500 to-cyan-500' },
              { icon: 'Lightbulb', title: 'Рекомендации', desc: 'что сделать, чтобы больше так не было', color: 'from-purple-500 to-pink-500' }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-2 border-transparent hover:border-purple-200" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon name={item.icon as any} size={28} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8">
            <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Icon name="AlertCircle" className="text-purple-600" />
              Без боли и сложностей
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                '❌ Без подключения к CRM',
                '❌ Без шаблонов и воды',
                '❌ Без раскрытия имён клиентов'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-700 font-medium">
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4">
            ⚠️ Что нужно от вас
          </h3>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Всего 10 минут вашего времени:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'Image', text: 'Скрины сделок (можно с замазанными полями)' },
              { icon: 'MessageSquare', text: 'Переписка или краткое описание диалога' },
              { icon: 'Phone', text: 'Запись 3х последних звонков (по каждой сделке)' },
              { icon: 'Brain', text: 'Ваше мнение: «почему сделка не закрылась»' },
              { icon: 'Video', text: 'Видеозапись 1 встречи (если есть)' }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon as any} size={24} className="text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Badge className="bg-blue-100 text-blue-700 text-base px-4 py-2">
              <Icon name="Lock" size={16} className="inline mr-2" />
              Без интеграций. Без доступа к CRM. Без риска.
            </Badge>
          </div>
        </div>
      </section>

      <section id="results" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4">
            🧠 Что вы получаете
          </h3>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Через 5 рабочих дней вы получаете:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                <Icon name="Video" size={32} className="text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-3">60 минут Zoom с экспертом</h4>
              <p className="text-gray-600">Разбор как продавать больше с экспертом по продажам</p>
            </Card>

            <Card className="p-8 bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6">
                <Icon name="FileSpreadsheet" size={32} className="text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-3">Таблица по каждой сделке</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <Icon name="X" size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <span>где продавец не дожал</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="X" size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <span>где слился на возражении</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="X" size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <span>где не вышел на ЛПР</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="X" size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <span>где был шанс вернуть — и его не использовали</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="mt-8 p-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                <Icon name="Target" size={24} className="text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">+ Конкретные рекомендации</h4>
                <p className="text-gray-700">Что делать иначе в следующий раз для закрытия сделок</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-12 border-2 border-red-200">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-6">
              💥 Почему это важно
            </h3>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>Вы видите финал сделки</strong> — но не понимаете, где именно она слилась.
              </p>
              <p>
                <strong>CRM покажет статус.</strong> BI-система — цифры.
              </p>
              <p className="text-xl font-bold text-red-600">
                Но никто не покажет, где МОП проиграл: на боли, на ЛПРе или на эмоциях.
              </p>
              <p className="text-2xl font-bold text-center mt-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Мы показываем.
              </p>
              <p className="text-center text-gray-600">
                На ваших примерах. Без оправданий. С пользой с первого дня.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
            💰 Стоимость
          </h3>
          <Card className="p-10 bg-white shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border-4 border-purple-200">
            <div className="text-center mb-8">
              <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                20 000 ₽
              </div>
              <p className="text-xl text-gray-600">За полный разбор 5 сделок</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 bg-green-50 p-4 rounded-xl border border-green-200">
                <Icon name="Gift" className="text-green-600 flex-shrink-0" size={24} />
                <p className="text-gray-700">
                  <strong>Бесплатно</strong> — если мы не найдём минимум 3 ошибки, стоившие вам выручки
                </p>
              </div>
              <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl border border-blue-200">
                <Icon name="Users" className="text-blue-600 flex-shrink-0" size={24} />
                <p className="text-gray-700">
                  Для отделов продаж от 5 человек — <strong>сумма зачитывается</strong> в основной проект
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border-2 border-yellow-200">
              <p className="text-center text-lg font-bold text-gray-800">
                📌 Один возврат сделки — и вы отбиваете весь разбор.<br />
                <span className="text-green-600">Остальное — в плюс.</span>
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
            🔐 Конфиденциальность и NDA
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'FileCheck', title: 'NDA', desc: 'Подпишем по вашему шаблону или нашему' },
              { icon: 'Trash2', title: 'Удаление данных', desc: 'Все данные удаляем через 7 дней' },
              { icon: 'ShieldCheck', title: 'Анонимность', desc: 'Полная анонимность по желанию' }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon as any} size={28} className="text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="bg-red-500 text-white text-lg px-6 py-2 mb-6">
            <Icon name="Clock" size={20} className="inline mr-2" />
            Места ограничены
          </Badge>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            ⏳ Мы берём не больше<br />5 отделов в месяц
          </h3>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Почему так мало? Потому что это не поток. Мы вникаем.<br />
            <strong>Ручная аналитика. Результат — важнее масштаба.</strong>
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4">
            📞 Готовы проверить,<br />где сливаются ваши деньги?
          </h3>
          <p className="text-center text-gray-600 mb-12 text-lg">
            ✍️ Напишите «Хочу разбор» или оставьте заявку:
          </p>

          <Card className="p-8 shadow-2xl bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Иван Иванов"
                  className="bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <Input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 916 363-63-91"
                  className="bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ivan@company.ru"
                  className="bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение (необязательно)</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Расскажите о вашей ситуации..."
                  className="bg-white min-h-[100px]"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-6"
              >
                Отправить заявку 🚀
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600 mb-4">Или свяжитесь напрямую:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/79163636391"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <Icon name="Phone" size={20} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://t.me/veselovandrei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Icon name="Send" size={20} />
                  <span>Telegram</span>
                </a>
              </div>
            </div>
          </Card>

          <p className="text-center text-gray-500 mt-8">
            ⏳ <strong>Ответ</strong> — в течение 1 рабочего дня.<br />
            <strong>Результаты</strong> — через 5.
          </p>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Аудит Продаж</h2>
          <p className="text-purple-200 mb-6">
            Покажем, где вы теряете деньги в отделе продаж
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://t.me/veselovandrei" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
              Telegram
            </a>
            <a href="https://wa.me/79163636391" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
              WhatsApp
            </a>
          </div>
          <p className="text-purple-300 text-sm">
            © 2024 Аудит Продаж. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
