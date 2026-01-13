import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Check, ChevronsUpDown, X, Search, TrendingUp, Wallet } from "lucide-react";
import { Helmet } from "react-helmet";
import { cn } from "@/lib/utils";
import { fundTaxationData, getTaxationType, type FundTaxation, type TaxationType } from "@/data/fundTaxationData";

const Taxation = () => {
  const [selectedFunds, setSelectedFunds] = useState<FundTaxation[]>([]);
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const filteredFunds = useMemo(() => {
    if (!searchValue) return fundTaxationData.slice(0, 50);
    return fundTaxationData
      .filter(fund => fund.name.toLowerCase().includes(searchValue.toLowerCase()))
      .slice(0, 50);
  }, [searchValue]);

  const handleSelectFund = (fund: FundTaxation) => {
    const isSelected = selectedFunds.some(f => f.name === fund.name);
    if (isSelected) {
      setSelectedFunds(selectedFunds.filter(f => f.name !== fund.name));
    } else {
      setSelectedFunds([...selectedFunds, fund]);
    }
  };

  const handleRemoveFund = (fundName: string) => {
    setSelectedFunds(selectedFunds.filter(f => f.name !== fundName));
  };

  const clearAll = () => {
    setSelectedFunds([]);
  };

  const groupedFunds = useMemo(() => {
    const groups: Record<TaxationType, FundTaxation[]> = {
      equity: [],
      debt: [],
      other: []
    };
    selectedFunds.forEach(fund => {
      const type = getTaxationType(fund.taxationResult);
      groups[type].push(fund);
    });
    return groups;
  }, [selectedFunds]);

  const getTaxationBadgeStyle = (type: TaxationType) => {
    switch (type) {
      case 'equity':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800';
      case 'debt':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getTaxationLabel = (type: TaxationType) => {
    switch (type) {
      case 'equity':
        return 'Equity-oriented';
      case 'debt':
        return 'Debt-oriented';
      default:
        return 'Other';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Mutual Fund Taxation Guide | Check Fund Tax Rules</title>
        <meta name="description" content="Search and compare taxation rules for 750+ mutual funds. Find out if your fund is equity-oriented or debt-oriented and understand the applicable tax rates." />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Header Section */}
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Mutual Fund <span className="text-primary">Taxation Guide</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Search and select funds to view their taxation rules. Compare multiple funds to understand how they're taxed differently.
            </p>
          </div>

          {/* Fund Selection Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <Card>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Search className="h-5 w-5 text-primary" />
                    Search & Select Funds
                  </CardTitle>
                  {selectedFunds.length > 0 && (
                    <Button variant="ghost" size="sm" onClick={clearAll}>
                      Clear all ({selectedFunds.length})
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-full justify-between h-12 text-left font-normal"
                    >
                      <span className="text-muted-foreground">
                        {selectedFunds.length > 0 
                          ? `${selectedFunds.length} fund${selectedFunds.length > 1 ? 's' : ''} selected`
                          : "Search from 750+ mutual funds..."
                        }
                      </span>
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 bg-popover z-50" align="start">
                    <Command shouldFilter={false}>
                      <CommandInput 
                        placeholder="Type to search funds..." 
                        value={searchValue}
                        onValueChange={setSearchValue}
                      />
                      <CommandList className="max-h-[300px]">
                        <CommandEmpty>No funds found.</CommandEmpty>
                        <CommandGroup>
                          {filteredFunds.map((fund) => {
                            const isSelected = selectedFunds.some(f => f.name === fund.name);
                            const type = getTaxationType(fund.taxationResult);
                            return (
                              <CommandItem
                                key={fund.name}
                                value={fund.name}
                                onSelect={() => handleSelectFund(fund)}
                                className="flex items-center gap-2 cursor-pointer"
                              >
                                <div className={cn(
                                  "flex h-4 w-4 items-center justify-center rounded border",
                                  isSelected 
                                    ? "bg-primary border-primary text-primary-foreground" 
                                    : "border-muted-foreground/30"
                                )}>
                                  {isSelected && <Check className="h-3 w-3" />}
                                </div>
                                <span className="flex-1 truncate">{fund.name}</span>
                                <Badge variant="outline" className={cn("text-xs", getTaxationBadgeStyle(type))}>
                                  {type === 'equity' ? 'Equity' : type === 'debt' ? 'Debt' : 'Other'}
                                </Badge>
                              </CommandItem>
                            );
                          })}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>

                {/* Selected Funds Pills */}
                {selectedFunds.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedFunds.slice(0, 10).map((fund) => (
                      <Badge 
                        key={fund.name} 
                        variant="secondary"
                        className="pl-2 pr-1 py-1 flex items-center gap-1"
                      >
                        <span className="max-w-[150px] truncate text-xs">{fund.name}</span>
                        <button 
                          onClick={() => handleRemoveFund(fund.name)}
                          className="ml-1 hover:bg-muted rounded-full p-0.5"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))
                    }
                    {selectedFunds.length > 10 && (
                      <Badge variant="outline" className="text-xs">
                        +{selectedFunds.length - 10} more
                      </Badge>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="max-w-4xl mx-auto">
            {selectedFunds.length === 0 ? (
              <Card className="border-dashed">
                <CardContent className="py-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No funds selected</h3>
                  <p className="text-muted-foreground">
                    Search and select funds above to view their taxation details
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {/* Equity-oriented Funds */}
                {groupedFunds.equity.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="h-5 w-5 text-emerald-600" />
                      <h2 className="text-xl font-semibold">Taxed as Equity</h2>
                      <Badge className={getTaxationBadgeStyle('equity')}>
                        {groupedFunds.equity.length}
                      </Badge>
                    </div>
                    <div className="grid gap-3">
                      {groupedFunds.equity.map((fund) => (
                        <Card key={fund.name} className="border-l-4 border-l-emerald-500">
                          <CardContent className="py-4">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <h3 className="font-medium mb-2">{fund.name}</h3>
                                <p className="text-sm text-muted-foreground">{fund.taxationResult}</p>
                              </div>
                              <button 
                                onClick={() => handleRemoveFund(fund.name)}
                                className="text-muted-foreground hover:text-foreground p-1"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Debt-oriented Funds */}
                {groupedFunds.debt.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Wallet className="h-5 w-5 text-amber-600" />
                      <h2 className="text-xl font-semibold">Taxed as Debt</h2>
                      <Badge className={getTaxationBadgeStyle('debt')}>
                        {groupedFunds.debt.length}
                      </Badge>
                    </div>
                    <div className="grid gap-3">
                      {groupedFunds.debt.map((fund) => (
                        <Card key={fund.name} className="border-l-4 border-l-amber-500">
                          <CardContent className="py-4">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <h3 className="font-medium mb-2">{fund.name}</h3>
                                <p className="text-sm text-muted-foreground">{fund.taxationResult}</p>
                              </div>
                              <button 
                                onClick={() => handleRemoveFund(fund.name)}
                                className="text-muted-foreground hover:text-foreground p-1"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Other Funds */}
                {groupedFunds.other.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <h2 className="text-xl font-semibold">Other Funds</h2>
                      <Badge variant="outline">
                        {groupedFunds.other.length}
                      </Badge>
                    </div>
                    <div className="grid gap-3">
                      {groupedFunds.other.map((fund) => (
                        <Card key={fund.name}>
                          <CardContent className="py-4">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <h3 className="font-medium mb-2">{fund.name}</h3>
                                <p className="text-sm text-muted-foreground">{fund.taxationResult}</p>
                              </div>
                              <button 
                                onClick={() => handleRemoveFund(fund.name)}
                                className="text-muted-foreground hover:text-foreground p-1"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Taxation;
