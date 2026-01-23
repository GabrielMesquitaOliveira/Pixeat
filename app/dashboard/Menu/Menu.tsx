"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Filter, Edit2, Trash2 } from "lucide-react";
import { ImageWithFallback } from "../../../components/ui/ImageWithFallback";

const produtos = [
  {
    id: 1,
    nome: "Executivo Frango À Parmegiana",
    descricao: "Bife de file de peito do frango à milanesa, gratinado com muçarela e arroz branco e fritas",
    preco: 34.99,
    categoria: "Principais",
    disponivel: true,
    imagem: "https://images.unsplash.com/photo-1717158776685-d4b7c346e1a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMHBsYXRlfGVufDF8fHx8MTc2NzYyMDMwMXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    nome: "Executivo Salmão",
    descricao: "Filé de salmão grelhado, arroz de brócolis, puré de batata e legumes salteados.",
    preco: 34.99,
    categoria: "Principais",
    disponivel: true,
    imagem: "https://images.unsplash.com/photo-1563612116828-a62f45c706e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjBmaXNoJTIwZGlubmVyfGVufDF8fHx8MTc2NzY2MzkwOHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    nome: "Executivo Frango Grelhado",
    descricao: "Bife de picanha, arroz branco, feijão tropeiro, salada e batata frita.",
    preco: 34.99,
    categoria: "Principais",
    disponivel: true,
    imagem: "https://images.unsplash.com/photo-1698556410824-4059a7ba055d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbiUyMHJpY2V8ZW58MXx8fHwxNzY3NjM1MjczfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    nome: "Pasta Carbonara",
    descricao: "Massa artesanal com molho carbonara, bacon crocante e parmesão ralado",
    preco: 29.99,
    categoria: "Principais",
    disponivel: true,
    imagem: "https://images.unsplash.com/photo-1609166639722-47053ca112ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGl0YWxpYW4lMjBmb29kfGVufDF8fHx8MTc2NzYwNDg2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    nome: "Porção de Coxinha",
    descricao: "10 unidades de coxinha de frango com catupiry",
    preco: 24.99,
    categoria: "Entradas",
    disponivel: true,
    imagem: "https://images.unsplash.com/photo-1762631885089-87c72596dd70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllZCUyMHNuYWNrcyUyMGFwcGV0aXplcnxlbnwxfHx8fDE3Njc2NjM5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    nome: "Petit Gateau",
    descricao: "Bolo de chocolate quente com sorvete de baunilha",
    preco: 18.99,
    categoria: "Sobremesas",
    disponivel: false,
    imagem: "https://images.unsplash.com/photo-1737700087785-96e2225fb3a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwc3dlZXQlMjBwYXN0cnl8ZW58MXx8fHwxNzY3NjYzOTEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const categorias = [
  { id: "todos", label: "Todos", count: 12 },
  { id: "entradas", label: "Entradas", count: 3 },
  { id: "principais", label: "Principais", count: 6 },
  { id: "sobremesas", label: "Sobremesas", count: 3 },
];

export function Menu() {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl mb-2">Cardápio Digital</h1>
        <p className="text-muted-foreground">
          Gerencie todos os produtos do seu restaurante em um único lugar. Cadastre novos pratos e bebidas,
          edite informações como nome, descrição, preço e disponibilidade, e acompanhe o desempenho de vendas de cada item.
        </p>
      </div>

      {/* Search and Actions */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Nome ou descrição..."
            className="pl-10 bg-input-background border-0"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          Filtros
        </Button>
        <Button className="gap-2 bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4" />
          Novo Prato
        </Button>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2">
        {categorias.map((cat) => (
          <button
            key={cat.id}
            className={`px-4 py-2 rounded-full text-sm ${cat.id === "todos"
              ? "bg-primary text-primary-foreground"
              : "hover:bg-muted"
              }`}
          >
            {cat.label}{" "}
            <span
              className={`ml-1 px-2 rounded-full ${cat.id === "todos"
                ? "bg-white/20"
                : "bg-primary/10 text-primary"
                }`}
            >
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {produtos.map((produto) => (
          <Card key={produto.id} className="overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
              <ImageWithFallback
                src={produto.imagem}
                alt={produto.nome}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {!produto.disponivel && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="bg-destructive text-white px-4 py-2 rounded-full text-sm">
                    Indisponível
                  </span>
                </div>
              )}
            </div>
            <div className="p-4 space-y-3">
              <div>
                <h3 className="text-lg mb-1">{produto.nome}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {produto.descricao}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl text-primary">
                  R$ {produto.preco.toFixed(2)}
                </span>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="gap-2">
                    <Edit2 className="w-4 h-4" />
                    Editar
                  </Button>
                  <Button size="sm" variant="outline" className="text-destructive hover:text-destructive">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
