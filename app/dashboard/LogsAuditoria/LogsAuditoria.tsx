"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Download,
  Clock,
  User,
  FileText,
  Eye,
  X,
  Calendar,
  Shield,
  Activity,
  AlertCircle,
  CheckCircle,
  Edit,
  Trash2,
  Plus,
  Settings
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface AuditLog {
  id: string;
  timestamp: string;
  usuario: {
    nome: string;
    email: string;
    cargo: string;
    avatar?: string;
  };
  acao: "criacao" | "edicao" | "exclusao" | "visualizacao" | "configuracao";
  entidade: string;
  entidadeId: string;
  descricao: string;
  detalhes: {
    campo?: string;
    valorAnterior?: string;
    valorNovo?: string;
    metadados?: Record<string, any>;
  };
  ip: string;
  dispositivo: string;
  severidade: "info" | "warning" | "critical";
}

const logsData: AuditLog[] = [
  {
    id: "1",
    timestamp: "2025-01-12T14:30:00",
    usuario: {
      nome: "Carlos Silva",
      email: "carlos.silva@lebistro.com",
      cargo: "Gerente",
    },
    acao: "edicao",
    entidade: "Produto",
    entidadeId: "prod_123",
    descricao: "Alterou o preço do produto 'Executivo Frango À Parmegiana'",
    detalhes: {
      campo: "preco",
      valorAnterior: "R$ 32,99",
      valorNovo: "R$ 34,99",
    },
    ip: "192.168.1.45",
    dispositivo: "Chrome/Windows",
    severidade: "info",
  },
  {
    id: "2",
    timestamp: "2025-01-12T14:15:00",
    usuario: {
      nome: "Ana Santos",
      email: "ana.santos@lebistro.com",
      cargo: "Atendente",
    },
    acao: "criacao",
    entidade: "Pedido",
    entidadeId: "ped_456",
    descricao: "Criou novo pedido para Mesa 15",
    detalhes: {
      metadados: {
        mesa: "15",
        itens: 4,
        total: "R$ 127,60",
      },
    },
    ip: "192.168.1.32",
    dispositivo: "Safari/iOS",
    severidade: "info",
  },
  {
    id: "3",
    timestamp: "2025-01-12T13:45:00",
    usuario: {
      nome: "Carlos Silva",
      email: "carlos.silva@lebistro.com",
      cargo: "Gerente",
    },
    acao: "exclusao",
    entidade: "Produto",
    entidadeId: "prod_789",
    descricao: "Removeu o produto 'Salada Tropical' do cardápio",
    detalhes: {
      campo: "disponivel",
      valorAnterior: "true",
      valorNovo: "false",
    },
    ip: "192.168.1.45",
    dispositivo: "Chrome/Windows",
    severidade: "warning",
  },
  {
    id: "4",
    timestamp: "2025-01-12T13:30:00",
    usuario: {
      nome: "Roberto Lima",
      email: "roberto.lima@lebistro.com",
      cargo: "Chef",
    },
    acao: "edicao",
    entidade: "Produto",
    entidadeId: "prod_234",
    descricao: "Atualizou a descrição do produto 'Pasta Carbonara'",
    detalhes: {
      campo: "descricao",
      valorAnterior: "Massa com bacon e molho",
      valorNovo: "Espaguete com bacon, parmesão e molho cremoso",
    },
    ip: "192.168.1.67",
    dispositivo: "Firefox/Linux",
    severidade: "info",
  },
  {
    id: "5",
    timestamp: "2025-01-12T12:00:00",
    usuario: {
      nome: "Carlos Silva",
      email: "carlos.silva@lebistro.com",
      cargo: "Gerente",
    },
    acao: "configuracao",
    entidade: "Sistema",
    entidadeId: "sys_config",
    descricao: "Alterou configurações de notificação por email",
    detalhes: {
      campo: "notificacoes_email",
      valorAnterior: "false",
      valorNovo: "true",
    },
    ip: "192.168.1.45",
    dispositivo: "Chrome/Windows",
    severidade: "critical",
  },
  {
    id: "6",
    timestamp: "2025-01-12T11:30:00",
    usuario: {
      nome: "Ana Santos",
      email: "ana.santos@lebistro.com",
      cargo: "Atendente",
    },
    acao: "visualizacao",
    entidade: "Relatório",
    entidadeId: "rel_vendas_jan",
    descricao: "Visualizou relatório de vendas de janeiro",
    detalhes: {
      metadados: {
        tipo: "vendas",
        periodo: "Janeiro 2025",
      },
    },
    ip: "192.168.1.32",
    dispositivo: "Safari/iOS",
    severidade: "info",
  },
  {
    id: "7",
    timestamp: "2025-01-12T10:15:00",
    usuario: {
      nome: "Carlos Silva",
      email: "carlos.silva@lebistro.com",
      cargo: "Gerente",
    },
    acao: "criacao",
    entidade: "Usuário",
    entidadeId: "user_890",
    descricao: "Criou novo usuário 'Maria Oliveira' como Atendente",
    detalhes: {
      metadados: {
        email: "maria.oliveira@lebistro.com",
        cargo: "Atendente",
        status: "Ativo",
      },
    },
    ip: "192.168.1.45",
    dispositivo: "Chrome/Windows",
    severidade: "warning",
  },
  {
    id: "8",
    timestamp: "2025-01-12T09:45:00",
    usuario: {
      nome: "Roberto Lima",
      email: "roberto.lima@lebistro.com",
      cargo: "Chef",
    },
    acao: "criacao",
    entidade: "Produto",
    entidadeId: "prod_345",
    descricao: "Adicionou novo produto 'Risoto de Camarão' ao cardápio",
    detalhes: {
      metadados: {
        categoria: "Principais",
        preco: "R$ 56,90",
        disponivel: true,
      },
    },
    ip: "192.168.1.67",
    dispositivo: "Firefox/Linux",
    severidade: "info",
  },
  {
    id: "9",
    timestamp: "2025-01-11T18:30:00",
    usuario: {
      nome: "Carlos Silva",
      email: "carlos.silva@lebistro.com",
      cargo: "Gerente",
    },
    acao: "edicao",
    entidade: "Mesa",
    entidadeId: "mesa_12",
    descricao: "Alterou status da Mesa 12 para 'Ocupada'",
    detalhes: {
      campo: "status",
      valorAnterior: "Disponível",
      valorNovo: "Ocupada",
    },
    ip: "192.168.1.45",
    dispositivo: "Chrome/Windows",
    severidade: "info",
  },
  {
    id: "10",
    timestamp: "2025-01-11T17:15:00",
    usuario: {
      nome: "Ana Santos",
      email: "ana.santos@lebistro.com",
      cargo: "Atendente",
    },
    acao: "exclusao",
    entidade: "Pedido",
    entidadeId: "ped_678",
    descricao: "Cancelou pedido da Mesa 8",
    detalhes: {
      campo: "status",
      valorAnterior: "Pendente",
      valorNovo: "Cancelado",
      metadados: {
        motivo: "Cliente desistiu",
      },
    },
    ip: "192.168.1.32",
    dispositivo: "Safari/iOS",
    severidade: "warning",
  },
];

const acaoLabels = {
  criacao: "Criação",
  edicao: "Edição",
  exclusao: "Exclusão",
  visualizacao: "Visualização",
  configuracao: "Configuração",
};

const acaoIcons = {
  criacao: Plus,
  edicao: Edit,
  exclusao: Trash2,
  visualizacao: Eye,
  configuracao: Settings,
};

const acaoColors = {
  criacao: "text-emerald-600 bg-emerald-50",
  edicao: "text-blue-600 bg-blue-50",
  exclusao: "text-red-600 bg-red-50",
  visualizacao: "text-purple-600 bg-purple-50",
  configuracao: "text-orange-600 bg-orange-50",
};

const severidadeConfig = {
  info: { label: "Info", icon: CheckCircle, color: "text-blue-600 bg-blue-50" },
  warning: { label: "Atenção", icon: AlertCircle, color: "text-yellow-600 bg-yellow-50" },
  critical: { label: "Crítico", icon: AlertCircle, color: "text-red-600 bg-red-50" },
};

export function LogsAuditoria() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLog, setSelectedLog] = useState<AuditLog | null>(null);
  const [filterAcao, setFilterAcao] = useState<string>("all");
  const [filterEntidade, setFilterEntidade] = useState<string>("all");
  const [filterSeveridade, setFilterSeveridade] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredLogs = logsData.filter((log) => {
    const matchesSearch =
      log.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.usuario.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.entidade.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesAcao = filterAcao === "all" || log.acao === filterAcao;
    const matchesEntidade = filterEntidade === "all" || log.entidade === filterEntidade;
    const matchesSeveridade = filterSeveridade === "all" || log.severidade === filterSeveridade;

    return matchesSearch && matchesAcao && matchesEntidade && matchesSeveridade;
  });

  const entidades = Array.from(new Set(logsData.map((log) => log.entidade)));

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const getRelativeTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));

    if (hours < 1) {
      return `${minutes} min atrás`;
    } else if (hours < 24) {
      return `${hours}h atrás`;
    } else {
      const days = Math.floor(hours / 24);
      return `${days}d atrás`;
    }
  };

  const exportLogs = () => {
    const csvContent = [
      ["Data/Hora", "Usuário", "Ação", "Entidade", "Descrição", "IP", "Dispositivo"].join(","),
      ...filteredLogs.map((log) =>
        [
          formatDate(log.timestamp),
          log.usuario.nome,
          acaoLabels[log.acao],
          log.entidade,
          log.descricao,
          log.ip,
          log.dispositivo,
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `logs_auditoria_${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
  };

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-[#74C3BF] rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-3xl">Logs de Auditoria</h1>
        </div>
        <p className="text-muted-foreground">
          Monitore todas as alterações realizadas no sistema. Acompanhe ações de usuários, rastreie
          modificações em tempo real e mantenha a segurança e conformidade do seu restaurante.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Total de Eventos</span>
            <Activity className="w-4 h-4 text-primary" />
          </div>
          <p className="text-2xl mb-1">{logsData.length}</p>
          <p className="text-xs text-muted-foreground">Últimas 24 horas</p>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Usuários Ativos</span>
            <User className="w-4 h-4 text-blue-600" />
          </div>
          <p className="text-2xl mb-1">
            {new Set(logsData.map((log) => log.usuario.email)).size}
          </p>
          <p className="text-xs text-muted-foreground">Diferentes usuários</p>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Eventos Críticos</span>
            <AlertCircle className="w-4 h-4 text-red-600" />
          </div>
          <p className="text-2xl mb-1">
            {logsData.filter((log) => log.severidade === "critical").length}
          </p>
          <p className="text-xs text-muted-foreground">Requer atenção</p>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Entidades</span>
            <FileText className="w-4 h-4 text-purple-600" />
          </div>
          <p className="text-2xl mb-1">{entidades.length}</p>
          <p className="text-xs text-muted-foreground">Tipos diferentes</p>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Buscar por usuário, ação ou entidade..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-input-background border-0"
          />
        </div>
        <Button
          variant="outline"
          className="gap-2"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="w-4 h-4" />
          Filtros
          {(filterAcao !== "all" || filterEntidade !== "all" || filterSeveridade !== "all") && (
            <span className="ml-1 w-2 h-2 bg-primary rounded-full"></span>
          )}
        </Button>
        <Button variant="outline" className="gap-2" onClick={exportLogs}>
          <Download className="w-4 h-4" />
          Exportar CSV
        </Button>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <Card className="p-6 space-y-4 border-primary/20">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg">Filtros Avançados</h3>
            <button
              onClick={() => {
                setFilterAcao("all");
                setFilterEntidade("all");
                setFilterSeveridade("all");
              }}
              className="text-sm text-primary hover:underline"
            >
              Limpar filtros
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Tipo de Ação</label>
              <select
                value={filterAcao}
                onChange={(e) => setFilterAcao(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-input-background border-0 focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="all">Todas as ações</option>
                <option value="criacao">Criação</option>
                <option value="edicao">Edição</option>
                <option value="exclusao">Exclusão</option>
                <option value="visualizacao">Visualização</option>
                <option value="configuracao">Configuração</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Entidade</label>
              <select
                value={filterEntidade}
                onChange={(e) => setFilterEntidade(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-input-background border-0 focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="all">Todas as entidades</option>
                {entidades.map((entidade) => (
                  <option key={entidade} value={entidade}>
                    {entidade}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Severidade</label>
              <select
                value={filterSeveridade}
                onChange={(e) => setFilterSeveridade(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-input-background border-0 focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="all">Todas as severidades</option>
                <option value="info">Info</option>
                <option value="warning">Atenção</option>
                <option value="critical">Crítico</option>
              </select>
            </div>
          </div>
        </Card>
      )}

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {filteredLogs.length} {filteredLogs.length === 1 ? "registro" : "registros"} encontrado
          {filteredLogs.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Logs Timeline */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 p-4 bg-secondary/30 border-b border-border text-sm text-muted-foreground">
              <div className="col-span-2">Data/Hora</div>
              <div className="col-span-2">Usuário</div>
              <div className="col-span-1">Ação</div>
              <div className="col-span-1">Entidade</div>
              <div className="col-span-4">Descrição</div>
              <div className="col-span-1">Severidade</div>
              <div className="col-span-1">Ações</div>
            </div>

            {/* Table Body */}
            <div>
              {filteredLogs.length === 0 ? (
                <div className="p-12 text-center text-muted-foreground">
                  <Activity className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p>Nenhum log encontrado</p>
                  <p className="text-sm mt-1">Tente ajustar os filtros de busca</p>
                </div>
              ) : (
                filteredLogs.map((log, index) => {
                  const AcaoIcon = acaoIcons[log.acao];
                  const SeveridadeIcon = severidadeConfig[log.severidade].icon;

                  return (
                    <div
                      key={log.id}
                      className={`grid grid-cols-12 gap-4 p-4 hover:bg-secondary/20 transition-colors border-b border-border/50 ${index === filteredLogs.length - 1 ? "border-b-0" : ""
                        }`}
                    >
                      <div className="col-span-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <div>
                            <p>{formatDate(log.timestamp).split(" ")[0]}</p>
                            <p className="text-xs text-muted-foreground">
                              {formatDate(log.timestamp).split(" ")[1]}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-xs text-primary">
                              {log.usuario.nome.split(" ").map((n) => n[0]).join("")}
                            </span>
                          </div>
                          <div>
                            <p className="line-clamp-1">{log.usuario.nome}</p>
                            <p className="text-xs text-muted-foreground">{log.usuario.cargo}</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div
                          className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs ${acaoColors[log.acao]}`}
                        >
                          <AcaoIcon className="w-3 h-3" />
                          <span className="hidden xl:inline">{acaoLabels[log.acao]}</span>
                        </div>
                      </div>

                      <div className="col-span-1 text-sm">
                        <span className="px-2 py-1 bg-secondary rounded-md text-xs">
                          {log.entidade}
                        </span>
                      </div>

                      <div className="col-span-4 text-sm">
                        <p className="line-clamp-2">{log.descricao}</p>
                      </div>

                      <div className="col-span-1">
                        <div
                          className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs ${severidadeConfig[log.severidade].color}`}
                        >
                          <SeveridadeIcon className="w-3 h-3" />
                          <span className="hidden xl:inline">
                            {severidadeConfig[log.severidade].label}
                          </span>
                        </div>
                      </div>

                      <div className="col-span-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 px-2"
                          onClick={() => setSelectedLog(log)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </Card>

      {/* Log Detail Modal */}
      {selectedLog && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedLog(null)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-border p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-[#74C3BF] rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl">Detalhes do Log</h2>
                  <p className="text-sm text-muted-foreground">
                    {getRelativeTime(selectedLog.timestamp)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedLog(null)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Ação e Severidade */}
              <div className="flex gap-3">
                <div
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl ${acaoColors[selectedLog.acao]
                    }`}
                >
                  {(() => {
                    const Icon = acaoIcons[selectedLog.acao];
                    return <Icon className="w-4 h-4" />;
                  })()}
                  <span className="font-medium">{acaoLabels[selectedLog.acao]}</span>
                </div>
                <div
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl ${severidadeConfig[selectedLog.severidade].color
                    }`}
                >
                  {(() => {
                    const Icon = severidadeConfig[selectedLog.severidade].icon;
                    return <Icon className="w-4 h-4" />;
                  })()}
                  <span className="font-medium">
                    {severidadeConfig[selectedLog.severidade].label}
                  </span>
                </div>
              </div>

              {/* Descrição */}
              <div>
                <h3 className="text-sm text-muted-foreground mb-2">Descrição</h3>
                <p className="text-base">{selectedLog.descricao}</p>
              </div>

              {/* Usuário */}
              <div>
                <h3 className="text-sm text-muted-foreground mb-3">Usuário</h3>
                <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-[#74C3BF] rounded-full flex items-center justify-center">
                    <span className="text-white">
                      {selectedLog.usuario.nome.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{selectedLog.usuario.nome}</p>
                    <p className="text-sm text-muted-foreground">{selectedLog.usuario.email}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {selectedLog.usuario.cargo}
                    </p>
                  </div>
                </div>
              </div>

              {/* Entidade */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm text-muted-foreground mb-2">Entidade</h3>
                  <p className="font-medium">{selectedLog.entidade}</p>
                </div>
                <div>
                  <h3 className="text-sm text-muted-foreground mb-2">ID da Entidade</h3>
                  <p className="font-mono text-sm bg-secondary/30 px-3 py-2 rounded-lg">
                    {selectedLog.entidadeId}
                  </p>
                </div>
              </div>

              {/* Alterações */}
              {selectedLog.detalhes.campo && (
                <div>
                  <h3 className="text-sm text-muted-foreground mb-3">Alterações</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                      <p className="text-xs text-red-600 mb-1">Valor Anterior</p>
                      <p className="font-medium text-red-900">
                        {selectedLog.detalhes.valorAnterior || "-"}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                        <span className="text-muted-foreground">→</span>
                      </div>
                    </div>
                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                      <p className="text-xs text-emerald-600 mb-1">Valor Novo</p>
                      <p className="font-medium text-emerald-900">
                        {selectedLog.detalhes.valorNovo || "-"}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Metadados */}
              {selectedLog.detalhes.metadados && (
                <div>
                  <h3 className="text-sm text-muted-foreground mb-3">Informações Adicionais</h3>
                  <div className="p-4 bg-secondary/30 rounded-xl space-y-2">
                    {Object.entries(selectedLog.detalhes.metadados).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-sm text-muted-foreground capitalize">
                          {key.replace(/_/g, " ")}
                        </span>
                        <span className="text-sm font-medium">{String(value)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Informações Técnicas */}
              <div>
                <h3 className="text-sm text-muted-foreground mb-3">Informações Técnicas</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary/30 rounded-xl">
                    <p className="text-xs text-muted-foreground mb-1">Endereço IP</p>
                    <p className="font-mono text-sm">{selectedLog.ip}</p>
                  </div>
                  <div className="p-4 bg-secondary/30 rounded-xl">
                    <p className="text-xs text-muted-foreground mb-1">Dispositivo</p>
                    <p className="text-sm">{selectedLog.dispositivo}</p>
                  </div>
                  <div className="p-4 bg-secondary/30 rounded-xl col-span-2">
                    <p className="text-xs text-muted-foreground mb-1">Data e Hora Completa</p>
                    <p className="text-sm">{formatDate(selectedLog.timestamp)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
