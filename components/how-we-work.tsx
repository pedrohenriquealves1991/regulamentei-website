import { CheckCircle } from "lucide-react"

interface WorkStepProps {
  title: string
  description: string
}

function WorkStep({ title, description }: WorkStepProps) {
  return (
    <div className="flex mb-4 group">
      <div className="mr-4 mt-1 transition-transform duration-300 group-hover:scale-110">
        <CheckCircle className="h-5 w-5 text-teal-600" />
      </div>
      <div>
        <h4 className="font-medium text-gray-800 group-hover:text-teal-700 transition-colors duration-300">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export function HowWeWork() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500 hover:shadow-md transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-teal-700 mb-6">Como Trabalhamos</h3>

      <div className="space-y-6">
        <WorkStep
          title="Atendimento Personalizado"
          description="As demandas são conduzidas principalmente pelo fundador, garantindo qualidade e consistência em todos os projetos."
        />

        <WorkStep
          title="Rede de Profissionais"
          description="Contamos com uma rede de profissionais qualificados que atuam dentro das indústrias e empresas do ramo da saúde para assuntos específicos."
        />

        <WorkStep
          title="Conhecimento Atualizado"
          description="Nossa rede de colaboradores vivencia as novidades regulatórias no dia a dia, trazendo insights valiosos e atualizados para cada projeto."
        />

        <WorkStep
          title="Flexibilidade"
          description="Nosso modelo de trabalho garante flexibilidade e profundidade técnica, mesmo para empresas que não contam com estrutura regulatória interna."
        />
      </div>
    </div>
  )
}
