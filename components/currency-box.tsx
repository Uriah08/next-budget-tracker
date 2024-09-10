"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Currency } from "@/data/currency"
import SkeletonWrapper from "./skeletons/SkeletonWrapper"
import { currencySchema } from "@/schemas"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { updateCurrency } from "@/actions/user-currency"
import { getCurrency } from "@/actions/user-currency"
import { useCurrencyStore } from "@/store/currencyStore"

type FormValues = {
  currency: string;
}

export function CurrencyBox() {

  const [isPending, startTransition] = React.useTransition()

  const { myCurrency, setCurrency } = useCurrencyStore()

  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const { setValue: setFormValue } = useForm<FormValues>({
    resolver: zodResolver(currencySchema),
    defaultValues: {
      currency: "",
    },
  })

  React.useEffect(() => {

    startTransition(async () => {
      const currency = await getCurrency()
      setValue(currency)
      setFormValue("currency", currency)
      setCurrency(currency)
    })
    
  }, [setCurrency,myCurrency,setFormValue])

  const handleSelect = async (currencyValue: string) => {

    const newValue = currencyValue === value ? "" : currencyValue
    updateCurrency(newValue)
    setValue(newValue)
    setOpen(false)
  }

  return (
    <SkeletonWrapper isLoading={isPending}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? Currency.find((currency) => currency.value === value)?.label
              : "Select"}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search currency..." className="h-9" />
            <CommandList>
              <CommandEmpty>No currency found.</CommandEmpty>
              <CommandGroup>
                {Currency.map((currency) => (
                  <CommandItem
                    key={currency.value}
                    value={currency.value}
                    onSelect={() => handleSelect(currency.value)}
                  >
                    {currency.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === currency.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </SkeletonWrapper>
  )
}

