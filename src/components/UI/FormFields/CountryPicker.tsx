import cx from "classnames"
import countries from "i18n-iso-countries"
import enLocale from "i18n-iso-countries/langs/en.json"
import { FC, useEffect, useRef, useState } from "react"

interface ICountryPicker {
  onCountryChange: ({ country }: { country: string }) => void
  className?: string
}

export const CountryPicker: FC<ICountryPicker> = ({
  onCountryChange,
  className = ``,
}) => {
  const menuRef = useRef<HTMLDivElement>(null)
  countries.registerLocale(enLocale)
  const countryObj = countries.getNames(`en`, { select: `official` })
  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    }
  })
  const [countriesOpen, setCountriesOpen] = useState<boolean>(false)
  const [search, setSearch] = useState<string>(``)
  const [selectedCountry, setSelectedCountry] = useState<string>(``)
  const [selectedCode, setSelectedCode] = useState<string>(``)
  const [focused, setFocused] = useState<boolean>(false)

  const handleSelection = (code: string, country: string): void => {
    setSelectedCode(code)
    setSelectedCountry(country)
    setCountriesOpen(false)
    setSearch(``)
    onCountryChange({ country })
  }

  useEffect(() => {
    const handler = (e: any) => {
      if (menuRef.current !== null) {
        if (!menuRef.current.contains(e.target)) {
          setCountriesOpen(false)
        }
      }
    }
    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  return (
    <fieldset
      className={cx(
        `bg-transparent block text-black font-cartograph w-full relative`,
        className
      )}
    >
      <figcaption
        className="flex flex-nowrap p-4 flex-row justify-between items-center cursor-pointer"
        onClick={() => setCountriesOpen(!countriesOpen)}
        title="This field is required."
        id="country"
        tabIndex={2}
        onKeyDown={(event) =>
          event.which === 13 ? setCountriesOpen(!countriesOpen) : null
        }
      >
        {selectedCountry ? (
          <span className="flex flex-row flex-nowrap gap-2 items-center">
            <img
              src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${selectedCode}.svg`}
              width="30"
              height="100%"
            />
            <span>{selectedCountry}</span>
          </span>
        ) : (
          <span className="text-black opacity-60">Country</span>
        )}
        {/* <SVG
                    src={chevronRight}
                    className={cx(
                        `rotate-90 max-w-[20px] fill-primary-slate-300 transition-all duration-300`,
                        {
                            "rotate-90": !countriesOpen,
                            "-rotate-90": countriesOpen,
                        }
                    )}
                /> */}
      </figcaption>

      <div
        className={cx(
          `max-h-[350px] bg-grey border-2 border-black w-full absolute top-[calc(100%+0.5rem)] left-0  z-[60] pt-4`,
          {
            hidden: !countriesOpen,
            block: countriesOpen,
          }
        )}
        ref={menuRef}
      >
        <span className="relative mb-2 w-[calc(100%-2rem)] block mx-auto">
          {/* <SVG
                        src={searchIcon}
                        className={cx(
                            `w-[20px] absolute top-[25%] left-3 z-20 transition duration-300`,
                            {
                                "fill-primary-slate-300": !focused,
                                "fill-primary-slate-100": focused,
                            }
                        )}
                    /> */}
          <input
            type="text"
            value={search}
            onChange={({ currentTarget: { value } }) => setSearch(value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            tabIndex={3}
            className=" block p-2 w-full pl-10"
          />
        </span>
        <div className="overflow-hidden ">
          <ul className="overflow-y-scroll max-h-[250px]">
            {countryArr
              .filter((country) =>
                country.label.toLowerCase().includes(search.toLowerCase())
              )
              .map(({ label, value }) => {
                return (
                  <li
                    key={value}
                    aria-label={label}
                    data-country={label}
                    data-code={value}
                    tabIndex={4}
                    onKeyDown={(event) =>
                      event.which === 13 ? handleSelection(value, label) : null
                    }
                    className="px-4 py-2 cursor-pointer hover:text-white transition duration-300 justify-between grid grid-cols-[30px_1fr_30px] items-center gap-2"
                    onClick={() => handleSelection(value, label)}
                  >
                    <img
                      src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${value}.svg`}
                      width="30"
                      height="100%"
                    />
                    <span>{label}</span>
                    <span>{value}</span>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    </fieldset>
  )
}
