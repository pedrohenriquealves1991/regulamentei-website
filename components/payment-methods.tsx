import { CreditCard, Wallet, Receipt } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function PaymentMethods() {
  return (
    <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
      <div className="text-center mb-8">
        <p className="text-lg text-gray-700 mb-4">
          Oferecemos um processo de pagamento simplificado e transparente, sem contratos longos ou complexos.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500 hover:shadow-md transition-all duration-300 h-full">
            <div className="flex items-center mb-4">
              <CreditCard className="h-8 w-8 text-teal-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Cartão de Crédito</h3>
            </div>
            <p className="text-gray-600">
              Pagamento rápido e seguro via link, com possibilidade de parcelamento em até 12x.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500 hover:shadow-md transition-all duration-300 h-full">
            <div className="flex items-center mb-4">
              <Receipt className="h-8 w-8 text-teal-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Orçamento Único</h3>
            </div>
            <p className="text-gray-600">
              Valor fechado para todo o projeto, sem surpresas ou custos adicionais durante o processo.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={300}>
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500 hover:shadow-md transition-all duration-300 h-full">
            <div className="flex items-center mb-4">
              <Wallet className="h-8 w-8 text-teal-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Sem Contratos Complexos</h3>
            </div>
            <p className="text-gray-600">
              Processo simplificado, sem burocracia excessiva ou compromissos de longo prazo.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
