
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Building2, TrendingUp, Clock, DollarSign, Shield, Users, Calculator, Phone, Mail, MapPin, Star } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const revenueData = [
    { year: 1, monthly: "41 900 ₽", yearly: "502 800 ₽", total: "502 800 ₽" },
    { year: 2, monthly: "46 090 ₽", yearly: "553 080 ₽", total: "1 055 880 ₽" },
    { year: 3, monthly: "50 699 ₽", yearly: "608 388 ₽", total: "1 664 268 ₽" },
    { year: 4, monthly: "55 769 ₽", yearly: "669 228 ₽", total: "2 333 496 ₽" },
    { year: 5, monthly: "61 346 ₽", yearly: "736 152 ₽", total: "3 069 648 ₽" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              💼 Готовый бизнес с пассивным доходом
            </h1>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <DollarSign className="w-12 h-12 mx-auto mb-4 text-green-300" />
                  <h3 className="text-2xl font-bold mb-2">41 900 ₽</h3>
                  <p className="text-blue-100">чистая прибыль в месяц</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                  <h3 className="text-2xl font-bold mb-2">1,5 года</h3>
                  <p className="text-blue-100">окупаемость</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 text-green-300" />
                  <h3 className="text-2xl font-bold mb-2">+10%</h3>
                  <p className="text-blue-100">рост дохода в год</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Получайте стабильный доход уже завтра — объект с арендаторами, договорами и управлением «под ключ»
            </p>
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg">
              Узнать подробности
            </Button>
          </div>
        </div>
      </section>

      {/* Business Concept */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">🧩 В чём суть бизнеса</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
              <p className="text-lg text-gray-700 mb-6">
                Я арендовал большое помещение по оптовой цене, разделил его на части, сделал ремонт и сдал дороже по частям.
              </p>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <p className="text-xl font-semibold text-blue-600 mb-2">
                  📌 Чем меньше помещение — тем выше цена за м².
                </p>
                <p className="text-gray-700">
                  На разнице вы и зарабатываете. Вы покупаете уже готовый объект с арендаторами и доходом с первого месяца.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Object Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            📍 Объект в Самаре
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <Building2 className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-4">Характеристики объекта</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-blue-500" />Улица Победы, 1 этаж</li>
                    <li>📐 Общая площадь: 134 м²</li>
                    <li>✅ Все помещения сданы</li>
                    <li>🏪 4 действующих бизнеса</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold mb-4">Арендаторы</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium">Wildberries</span>
                      <Badge variant="secondary">62.8 м²</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                      <span className="font-medium">Пивной магазин</span>
                      <Badge variant="secondary">29 м²</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <span className="font-medium">Кофейня</span>
                      <Badge variant="secondary">38 м²</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">Постамат Яндекс.Маркета</span>
                      <Badge variant="secondary">2 м²</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Details */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">💸 Финансовые показатели</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <DollarSign className="w-16 h-16 mx-auto mb-4 text-green-500" />
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Пассивный доход</h3>
                  <p className="text-4xl font-bold text-green-600 mb-4">41 900 ₽</p>
                  <p className="text-gray-600">в месяц чистой прибыли</p>
                  <p className="text-sm text-gray-500 mt-2">с учётом всех расходов</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <Calculator className="w-16 h-16 mx-auto mb-4 text-blue-500" />
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Цена продажи</h3>
                  <p className="text-4xl font-bold text-blue-600 mb-4">754 200 ₽</p>
                  <p className="text-gray-600">18 месяцев × 41 900 ₽</p>
                  <Badge className="mt-2 bg-green-100 text-green-800">-70 000 ₽ депозиты</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Forecast */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              📈 Прогноз доходности на 5 лет
            </h2>
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-4 px-4 font-bold text-gray-900">Год</th>
                        <th className="text-left py-4 px-4 font-bold text-gray-900">Доход в месяц</th>
                        <th className="text-left py-4 px-4 font-bold text-gray-900">Доход в год</th>
                        <th className="text-left py-4 px-4 font-bold text-gray-900">Суммарный доход</th>
                      </tr>
                    </thead>
                    <tbody>
                      {revenueData.map((row) => (
                        <tr key={row.year} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-4 font-semibold text-blue-600">{row.year}</td>
                          <td className="py-4 px-4 text-green-600 font-medium">{row.monthly}</td>
                          <td className="py-4 px-4 text-green-600 font-medium">{row.yearly}</td>
                          <td className="py-4 px-4 text-green-700 font-bold">{row.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-8 p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg">
                  <p className="text-xl font-bold text-green-800 text-center">
                    👉 Ваша чистая прибыль за 5 лет: ≈ 2 566 848 ₽
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            ✅ Почему это безопасно и удобно
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="font-bold mb-2">Обеспечительные платежи</h3>
                <p className="text-gray-600">Все арендаторы внесли депозиты</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className="font-bold mb-2">Надёжные арендаторы</h3>
                <p className="text-gray-600">Wildberries арендует напрямую через ООО "РВБ"</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6">
                <Building2 className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="font-bold mb-2">Проверенная локация</h3>
                <p className="text-gray-600">Место уже было пивным магазином ранее</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="font-bold mb-2">Крупные инвестиции</h3>
                <p className="text-gray-600">Кофейня вложила ~500 000 ₽ в ремонт</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-indigo-500 mb-4" />
                <h3 className="font-bold mb-2">Дополнительный трафик</h3>
                <p className="text-gray-600">Постамат Яндекс.Маркет привлекает клиентов</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="font-bold mb-2">Долгосрочная аренда</h3>
                <p className="text-gray-600">Все арендаторы заходят надолго</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
              📞 Хочу узнать больше
            </h2>
            <p className="text-center text-purple-100 mb-8 text-lg">
              Оставьте заявку, чтобы назначить экскурсию, получить презентацию объекта и задать любые вопросы
            </p>
            
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Input
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      placeholder="Email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Ваш вопрос или комментарий"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-white/20 border-white/30 text-white placeholder:text-purple-200 min-h-24"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg">
                    Оставить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Дмитрий</h3>
            <p className="text-gray-300 mb-6">
              Предприниматель, создаю объекты пассивного дохода. 
              Цель — 1 000 000 ₽ пассивного дохода в месяц.
            </p>
            <div className="flex justify-center space-x-6">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+7 (XXX) XXX-XX-XX</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>info@example.com</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
