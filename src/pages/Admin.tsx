import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Request {
  id: number;
  name: string;
  phone: string;
  email: string;
  message: string;
  created_at: string;
}

export default function Admin() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await fetch('https://functions.poehali.dev/12d099fe-164f-4065-8221-61e4274d9d06');
      const data = await response.json();
      
      if (data.success) {
        setRequests(data.requests);
      } else {
        setError('Ошибка загрузки данных');
      }
    } catch (err) {
      setError('Ошибка подключения');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 p-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Админ-панель
            </h1>
            <button 
              onClick={fetchRequests}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-all"
            >
              <Icon name="RefreshCw" size={20} />
              Обновить
            </button>
          </div>
          <p className="text-gray-600 text-lg">
            Заявки на диагностику продаж
          </p>
        </div>

        {loading && (
          <div className="text-center py-12">
            <Icon name="Loader2" size={48} className="animate-spin text-purple-600 mx-auto" />
            <p className="text-gray-600 mt-4">Загрузка...</p>
          </div>
        )}

        {error && (
          <Card className="p-6 bg-red-50 border-red-200">
            <div className="flex items-center gap-3">
              <Icon name="AlertCircle" className="text-red-600" size={24} />
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          </Card>
        )}

        {!loading && !error && (
          <>
            <div className="mb-6">
              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg px-4 py-2">
                Всего заявок: {requests.length}
              </Badge>
            </div>

            <div className="space-y-4">
              {requests.length === 0 ? (
                <Card className="p-12 text-center">
                  <Icon name="Inbox" size={64} className="text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Заявок пока нет</p>
                </Card>
              ) : (
                requests.map((request) => (
                  <Card key={request.id} className="p-6 hover:shadow-lg transition-all duration-300">
                    <div className="grid md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Имя</p>
                        <p className="font-semibold text-gray-800 flex items-center gap-2">
                          <Icon name="User" size={16} className="text-purple-600" />
                          {request.name}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Телефон</p>
                        <a 
                          href={`tel:${request.phone}`}
                          className="font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-2"
                        >
                          <Icon name="Phone" size={16} />
                          {request.phone}
                        </a>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Email</p>
                        <a 
                          href={`mailto:${request.email}`}
                          className="font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-2"
                        >
                          <Icon name="Mail" size={16} />
                          {request.email}
                        </a>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Дата</p>
                        <p className="font-semibold text-gray-800 flex items-center gap-2">
                          <Icon name="Calendar" size={16} className="text-purple-600" />
                          {formatDate(request.created_at)}
                        </p>
                      </div>
                    </div>
                    
                    {request.message && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-500 mb-2">Сообщение:</p>
                        <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">
                          {request.message}
                        </p>
                      </div>
                    )}
                  </Card>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
